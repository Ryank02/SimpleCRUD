import { HttpInterceptorFn } from '@angular/common/http';

const API_URL = "https://localhost:7031";

export const httpBaseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const apiReq = req.clone({ url: `${API_URL}/${req.url}` });
  return next(apiReq);
};
