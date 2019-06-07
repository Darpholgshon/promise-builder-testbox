
export default abstract class Builder<T> implements Promise<T> {

  abstract build(resolve, reject);

  readonly [Symbol.toStringTag]: string;

  catch<TResult = never>(onrejected?: ((reason: any) => (PromiseLike<TResult> | TResult)) | undefined | null): Promise<T | TResult> {
    return undefined;
  }

  then<Result = T, NextPromise = never>(resolve?: ((value: T) => (PromiseLike<Result> | Result)) | undefined | null, reject?: ((reason: any) => (PromiseLike<NextPromise> | NextPromise)) | undefined | null): Promise<Result | NextPromise> {
    return this.build(resolve, reject);
  }

  finally(onfinally?: () => void): Promise<T> {
    throw new Error("Method not implemented.");
  }
}
