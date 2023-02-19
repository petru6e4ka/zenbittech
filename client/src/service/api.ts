type IFetchParams<D> = {
  url: string;
  baseUrl?: string;
  body?: D;
  parseBody?: (param: D) => any;
  method: "PUT" | "POST" | "GET" | "DELETE";
};

type IServerResponse<D> = { error: boolean; message: D };

type IFetchResponse<R> = { response: Response; data: R };

const _fetch = async <R = any, D = any>({
  url,
  baseUrl = "http://localhost:3000",
  body,
  parseBody = JSON.stringify,
  method,
}: IFetchParams<D>): Promise<IFetchResponse<R>> => {
  const response = await fetch(baseUrl + url, {
    body: body ? parseBody(body) : null,
    headers: {
      "Content-Type": "application/json",
    },
    method,
  });

  try {
    const data = await response.json();

    return { response, data };
  } catch (err) {
    return { response, data: null as R };
  }
};

const post = <R = any, D = any, RF = IServerResponse<R>>({
  url,
  body,
}: Omit<IFetchParams<D>, "method">): Promise<IFetchResponse<RF>> =>
  _fetch({ url, method: "POST", body: body });

export { _fetch, post };
