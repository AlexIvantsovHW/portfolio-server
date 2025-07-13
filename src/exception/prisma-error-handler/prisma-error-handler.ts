// lib/handlePrismaError.ts
import { HttpException, HttpStatus } from '@nestjs/common';
import { Prisma } from '../../../generated/prisma';

export function handlePrismaError(error: unknown): never {
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const code = error.code as string;
    switch (code) {
      case 'P1000':
        throw new HttpException(
          'Authentication failed against database server. Check credentials.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P1001':
        throw new HttpException(
          'Cannot reach database server. Is it running?',
          HttpStatus.SERVICE_UNAVAILABLE,
        );
      case 'P1002':
        throw new HttpException(
          'Connection to database timed out.',
          HttpStatus.GATEWAY_TIMEOUT,
        );
      case 'P1003':
        throw new HttpException(
          'Specified database does not exist.',
          HttpStatus.NOT_FOUND,
        );
      case 'P1008':
        throw new HttpException(
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          `Operation timed out after ${error?.meta?.['time']}`,
          HttpStatus.GATEWAY_TIMEOUT,
        );
      case 'P1009':
        throw new HttpException(
          'Database already exists.',
          HttpStatus.CONFLICT,
        );
      case 'P1010':
        throw new HttpException(
          'User denied access to the database.',
          HttpStatus.FORBIDDEN,
        );
      case 'P1011':
        throw new HttpException(
          `TLS connection error: ${error.message}`,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P1012':
        throw new HttpException(
          `Schema validation error: ${error.message}`,
          HttpStatus.BAD_REQUEST,
        );
      case 'P1013':
        throw new HttpException(
          `Invalid database connection string: ${error.message}`,
          HttpStatus.BAD_REQUEST,
        );
      case 'P1014':
        throw new HttpException(
          `Underlying model kind does not exist.`,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P1015':
        throw new HttpException(
          `Schema uses unsupported features for your database version; ${error.message}`,
          HttpStatus.BAD_REQUEST,
        );
      case 'P1016':
        throw new HttpException(
          `Raw query parameter count mismatch.`,
          HttpStatus.BAD_REQUEST,
        );
      case 'P1017':
        throw new HttpException(
          'Server closed the database connection.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );

      case 'P2000':
        throw new HttpException(
          'Column value too long.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P2001':
        throw new HttpException('Record not found.', HttpStatus.NOT_FOUND);
      case 'P2002':
        throw new HttpException(
          'Unique constraint failed.',
          HttpStatus.CONFLICT,
        );
      case 'P2003':
        throw new HttpException(
          'Foreign key constraint failed.',
          HttpStatus.CONFLICT,
        );
      case 'P2004':
        throw new HttpException(
          'Database constraint failed.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P2005':
        throw new HttpException(
          'Invalid value for column type.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P2006':
        throw new HttpException(
          'Invalid value for field.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P2007':
        throw new HttpException(
          'Data validation error.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P2008':
        throw new HttpException('Query parse error.', HttpStatus.BAD_REQUEST);
      case 'P2009':
        throw new HttpException(
          'Query validation error.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P2010':
        throw new HttpException('Raw query failed.', HttpStatus.BAD_REQUEST);
      case 'P2011':
        throw new HttpException(
          'Null constraint violation.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P2012':
        throw new HttpException(
          'Missing a required value.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P2013':
        throw new HttpException(
          'Missing required argument.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P2014':
        throw new HttpException(
          'Required relation violation.',
          HttpStatus.CONFLICT,
        );
      case 'P2015':
        throw new HttpException(
          'Related record not found.',
          HttpStatus.NOT_FOUND,
        );
      case 'P2016':
        throw new HttpException(
          'Query interpretation error.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P2017':
        throw new HttpException(
          'Relation records not connected.',
          HttpStatus.CONFLICT,
        );
      case 'P2018':
        throw new HttpException(
          'Required relations missing.',
          HttpStatus.NOT_FOUND,
        );
      case 'P2019':
        throw new HttpException('Input error.', HttpStatus.BAD_REQUEST);
      case 'P2020':
        throw new HttpException(
          'Value out of range for type.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P2021':
        throw new HttpException('Table does not exist.', HttpStatus.NOT_FOUND);
      case 'P2022':
        throw new HttpException('Column does not exist.', HttpStatus.NOT_FOUND);
      case 'P2023':
        throw new HttpException(
          'Inconsistent column data.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P2024':
        throw new HttpException(
          'Connection pool timeout.',
          HttpStatus.GATEWAY_TIMEOUT,
        );
      case 'P2025':
        throw new HttpException(
          'Dependent records not found.',
          HttpStatus.NOT_FOUND,
        );
      case 'P2026':
        throw new HttpException(
          'Feature not supported by provider.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P2027':
        throw new HttpException(
          'Multiple database errors occurred.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P2028':
        throw new HttpException(
          'Transaction API error.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P2029':
        throw new HttpException(
          'Query parameter limit exceeded.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P2030':
        throw new HttpException(
          'Fulltext index missing.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P2031':
        throw new HttpException(
          'MongoDB replica set required for transactions.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P2033':
        throw new HttpException(
          'Number exceeds 64-bit integer range.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P2034':
        throw new HttpException(
          'Transaction failed due to conflict or deadlock.',
          HttpStatus.CONFLICT,
        );
      case 'P2035':
        throw new HttpException(
          'Database assertion violation.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P2036':
        throw new HttpException(
          'External connector error.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P2037':
        throw new HttpException(
          'Too many open database connections.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );

      case 'P3000':
        throw new HttpException(
          'Failed to create database.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P3001':
        throw new HttpException(
          'Migration may cause destructive changes.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P3002':
        throw new HttpException(
          'Migration rolled back.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P3003':
        throw new HttpException(
          'Migration format invalid.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P3004':
        throw new HttpException(
          'Cannot migrate system database.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P3005':
        throw new HttpException(
          'Database schema is not empty.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P3006':
        throw new HttpException(
          'Shadow database apply failed.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P3007':
        throw new HttpException(
          'Unsupported preview feature in migrate.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P3008':
        throw new HttpException(
          'Migration already applied.',
          HttpStatus.CONFLICT,
        );
      case 'P3009':
        throw new HttpException(
          'Failed migrations present — cannot apply new ones.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P3010':
        throw new HttpException(
          'Migration name too long.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P3011':
        throw new HttpException(
          'Cannot rollback migration that was not applied.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P3012':
        throw new HttpException(
          "Cannot rollback migration that isn't in failed state.",
          HttpStatus.BAD_REQUEST,
        );
      case 'P3013':
        throw new HttpException(
          'Provider array not supported — use a single provider.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P3014':
        throw new HttpException(
          'Failed to create shadow database.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P3015':
        throw new HttpException(
          'Migration file not found.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P3016':
        throw new HttpException(
          'Database reset fallback failed.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P3017':
        throw new HttpException('Migration not found.', HttpStatus.NOT_FOUND);
      case 'P3018':
        throw new HttpException(
          'Migration failed — new migrations blocked.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P3019':
        throw new HttpException(
          'Datasource provider mismatch.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P3020':
        throw new HttpException(
          'Shadow DB auto creation disabled on Azure SQL.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P3021':
        throw new HttpException(
          'Foreign keys not supported on this DB.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P3022':
        throw new HttpException(
          'Direct DDL execution disabled on this DB.',
          HttpStatus.BAD_REQUEST,
        );

      case 'P4000':
        throw new HttpException(
          'Introspection failed to produce schema file.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P4001':
        throw new HttpException(
          'Introspected database is empty.',
          HttpStatus.NOT_FOUND,
        );
      case 'P4002':
        throw new HttpException(
          'Inconsistent database schema.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );

      case 'P6000':
        throw new HttpException(
          'Server error (generic).',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P6001':
        throw new HttpException(
          'Invalid datasource URL.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P6002':
        throw new HttpException(
          'Unauthorized: invalid API key.',
          HttpStatus.UNAUTHORIZED,
        );
      case 'P6003':
        throw new HttpException(
          'Plan limit reached.',
          HttpStatus.TOO_MANY_REQUESTS,
        );
      case 'P6004':
        throw new HttpException(
          'Accelerate query timeout.',
          HttpStatus.GATEWAY_TIMEOUT,
        );
      case 'P6005':
        throw new HttpException(
          'Invalid parameters for transaction.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P6006':
        throw new HttpException(
          'Prisma version not supported by Accelerate.',
          HttpStatus.BAD_REQUEST,
        );
      case 'P6008':
        throw new HttpException(
          'Accelerate engine start or connection error.',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      case 'P6009':
        throw new HttpException(
          'Accelerate response size limit exceeded.',
          HttpStatus.PAYLOAD_TOO_LARGE,
        );
      case 'P6010':
        throw new HttpException(
          'Accelerate project disabled.',
          HttpStatus.SERVICE_UNAVAILABLE,
        );
      case 'P5011':
        throw new HttpException(
          'Too many requests — retry later.',
          HttpStatus.TOO_MANY_REQUESTS,
        );

      default:
        throw new HttpException(
          `Unknown Prisma error: ${error.code}`,
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
    }
  } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
    throw new HttpException(
      `Unknown request error: ${error.message}`,
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  } else if (error instanceof Prisma.PrismaClientRustPanicError) {
    throw new HttpException(
      `Prisma engine panic: ${error.message}`,
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  } else if (error instanceof Prisma.PrismaClientInitializationError) {
    throw new HttpException(
      `Prisma initialization error: ${error.message}`,
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  } else if (error instanceof Prisma.PrismaClientValidationError) {
    throw new HttpException(
      `Prisma validation error: ${error.message}`,
      HttpStatus.BAD_REQUEST,
    );
  }

  throw error;
}
