import '@testing-library/jest-dom/extend-expect';
import server from './mocks/server';

beforeAll(() => server.listen()); // Enable the mocking in tests.
afterEach(() => server.resetHandlers()); // Reset any runtime handlers tests may use.
afterAll(() => server.close()); // Clean up once the tests are done.
