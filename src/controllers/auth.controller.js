import logger from '#config/logger.js';
import { createUser } from '#services/auth.service.js';
import { cookies } from '#utils/cookies.js';
import { formatValidationErrors } from '#utils/format.js';
import { jwtToken } from '#utils/jwt.js';
import { signUpSchema } from '#validations/auth.validation.js';

export const signup = async (req, res, next) => {
  try {
    const validationResult = signUpSchema.safeParse(req.body);
    if (!validationResult.success) {
      const formattedErrors = formatValidationErrors(validationResult.error);
      return res
        .status(400)
        .json({ error: 'Validation failed', details: formattedErrors });
    }

    const { name, email, password, role } = validationResult.data;

    const user = await createUser({ name, email, password, role });

    const token = jwtToken.sign({
      id: user.id,
      email: user.email,
      role: user.role,
    });
    cookies.setCookie(res, 'token', token);

    logger.info(`User signed up with email: ${email}`);
    res.status(201).json({
      message: 'User signed up successfully',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    logger.error('Error during sign-up', error);

    if (error.message === 'User with this email already exists') {
      return res.status(409).json({ error: 'email already exists' });
    }

    next(error);
  }
};
