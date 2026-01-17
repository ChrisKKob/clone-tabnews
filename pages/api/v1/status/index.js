import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const result = await database.query("SHOW server_version;");
  const postgresVersion = result.rows[0].server_version;

  const result2 = await database.query("SHOW max_connections;");
  const maxConnections = result2.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;

  const databaseOpenedConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });

  const databaseOpenedConnectionsValue =
    databaseOpenedConnectionsResult.rows[0].count;

  response.status(200).json({
    updated_at: updatedAt,
    postgres_version: postgresVersion,
    max_connections: parseInt(maxConnections),
    current_connections: databaseOpenedConnectionsValue,
  });
}

export default status;
