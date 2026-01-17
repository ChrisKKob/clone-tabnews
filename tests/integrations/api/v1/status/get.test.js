const { exportTraceState } = require("next/dist/trace");

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();

  expect(responseBody.postgres_version).toEqual("16.0");

  expect(responseBody.max_connections).toEqual(100);

  expect(responseBody.current_connections).toEqual(1);

  console.log(responseBody.current_connections);

  //const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  //console.log(parsedUpdatedAt);
});
