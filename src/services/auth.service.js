import { db } from '#config/database.js';
import logger from '#config/logger.js';
import bcrypt from 'bcrypt';
import { users } from '#models/user.model.js';
import { eq } from 'drizzle-orm';

export const hashPassword = async password => {
  try {
    return await bcrypt.hash(password, 10);
  } catch (error) {
    logger.error('Error hashing password', error);
    throw new Error('Error hashing password');
  }
};

export const createUser = async ({ name, email, password, role }) => {
  try {
    const existingUser = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    if (existingUser.length > 0) {
      throw new Error('User with this email already exists');
    }

    const hashedPassword = await hashPassword(password);

    const [newUser] = await db
      .insert(users)
      .values({ name, email, password: hashedPassword, role })
      .returning({
        id: users.id,
        name: users.name,
        email: users.email,
        role: users.role,
        createdAt: users.createdAt,
      });

    logger.info(`User ${newUser.email} created successfully`);
    return newUser;
  } catch (error) {
    logger.error('Error creating user', error);
    throw new Error('Error creating user');
  }
};

export const comparePassword = async (plainPassword, hashedPassword) => {
  try {
    return await bcrypt.compare(plainPassword, hashedPassword);
  } catch (error) {
    logger.error('Error comparing password', error);
    throw new Error('Error comparing password');
  }
};

export const authenticateUser = async (email, password) => {
  try {
    const userArr = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);
    const user = userArr[0];
    if (!user) {
      throw new Error('User not found');
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      throw new Error('Invalid password');
    }
    return user;
  } catch (error) {
    logger.error('Error authenticating user', error);
    throw error;
  }
};
