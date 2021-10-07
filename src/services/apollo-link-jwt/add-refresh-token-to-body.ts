/**
 * Utility to inject the refresh token into the fetch body
 */
export const addRefreshTokenToBody = async (
  fetchBody: any,
  refreshToken: string
) => {
  const body = await fetchBody();

  // Create variables object if it wasn't intially set
  if (!body.variables) body.variables = {};

  // Inject the refresh token in the variables object
  // This allows users to also add their own variables to the fetch
  // in additon to the refresh token if needed
  body.variables.refreshToken = refreshToken;

  return body;
};
