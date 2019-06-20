interface IAuth {
  isAuthenticated: boolean;
  authenticate: any;
  signout: any;
}

const auth: IAuth = {
  isAuthenticated: true,
  authenticate(cb: any) {
    this.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: any) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

export default auth;
