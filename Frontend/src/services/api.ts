export class ApiError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message)
  }
}

export async function withLatency<T>(factory: () => T, ms = 1200): Promise<T> {
  await new Promise((resolve) => setTimeout(resolve, ms))
  return factory()
}
