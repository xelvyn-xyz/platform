declare module "connect-pg-simple" {
  import { SessionStore } from "express-session";
  import { Pool, PoolClient } from "pg";

  interface ConnectPgSimpleOptions {
    pool?: Pool | PoolClient;
    tableName?: string;
    schemaName?: string;
    pruneSessionInterval?: number;
  }

  class PgSession extends SessionStore {
    constructor(options?: ConnectPgSimpleOptions);
  }

  export = PgSession;
}
