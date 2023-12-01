export const promiseHandler = async <T, U = Error>(promise: Promise<T>) =>
  promise
    .then<readonly [T, null]>((result) => [result, null] as const)
    .catch<readonly [null, U]>((error) => [null, error] as const);


export default async function promiseHandler<T, U = Error>(
  promise: Promise<T>
) {
  return promise
    .then<readonly [T, null]>((result) => [result, null] as const)
    .catch<readonly [null, U]>((error) => [null, error] as const);
}

