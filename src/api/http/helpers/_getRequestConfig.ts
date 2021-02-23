import { generateURL } from "src/utils/generateURL";
import { _replaceUrlWithParams } from "./_replaceUrlWithParams";

interface ICreateApiParams {
  url: string;
  apiPrefix: string;
  query?: { [key: string]: any };
  params?: { [key: string]: any };
}

export function _createApiParams({ url, params, query, apiPrefix }: ICreateApiParams) {
  let urlToUse = generateURL(apiPrefix, url);

  if (params && Object.keys(params).length > 0) {
    urlToUse = _replaceUrlWithParams(urlToUse, params);
  }
  if (query && Object.keys(query).length > 0) {
    urlToUse += "?" + new URLSearchParams(query).toString();
  }
  return { urlToUse };
}
