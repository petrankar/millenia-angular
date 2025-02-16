import { CanActivateChildFn, Router } from '@angular/router';

export const authGuard: CanActivateChildFn = () => {
  const username = localStorage.getItem('username') || sessionStorage.getItem('username');
  if (username) {
    return true;
  }

  const router = new Router();
  router.navigate(['/login']);
  return false;
};
