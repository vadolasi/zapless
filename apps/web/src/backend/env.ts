import { type Static, Type } from "@sinclair/typebox";
import { TypeCompiler } from "@sinclair/typebox/compiler";

const envSchema = Type.Object({
  DATABASE_URL: Type.String(),
  REDIS_URL: Type.String(),
  NODE_ENV: Type.Union(
    [Type.Literal("development"), Type.Literal("production")],
    {
      default: "development",
    },
  ),
  RESEND_API_KEY: Type.String(),
  PASSWORD_PEPPER: Type.String(),
  COOKIE_SECRET_1: Type.String(),
  COOKIE_SECRET_2: Type.String(),
  COOKIE_SECRET_3: Type.String(),
  EVOLUTION_API_KEY: Type.String(),
});

export type Env = Static<typeof envSchema>;

const C = TypeCompiler.Compile(envSchema);

const envValue = {
  DATABASE_URL: process.env.DATABASE_URL,
  REDIS_URL: process.env.REDIS_URL,
  NODE_ENV: process.env.NODE_ENV || "development",
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  PASSWORD_PEPPER: process.env.PASSWORD_PEPPER,
  COOKIE_SECRET_1: process.env.COOKIE_SECRET_1,
  COOKIE_SECRET_2: process.env.COOKIE_SECRET_2,
  COOKIE_SECRET_3: process.env.COOKIE_SECRET_3,
  EVOLUTION_API_KEY: process.env.EVOLUTION_API_KEY,
};

if (!C.Check(envValue)) {
  throw new Error(
    JSON.stringify(
      [...C.Errors(envValue)].map(({ path, message }) => ({ path, message })),
    ),
  );
}

export default envValue as Env;
