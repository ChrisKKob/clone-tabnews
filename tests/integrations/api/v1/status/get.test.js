const { exportTraceState } = require("next/dist/trace");

test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("https://gachando.com.br");
  expect(response.status).toBe(200);
});
