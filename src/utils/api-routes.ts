
enum httpMethods {
    GET = 'GET',
    PUT = 'PUT',
    POST = 'POST',
    DELETE = 'DELETE',
}

export const API = {
    login: { apiPath: '/login', action: httpMethods.POST },
    // forgotPassword: { apiPath: 'user/sendForgotPasswordRequest', action: httpMethods.POST },
    // resetPassword: { apiPath: 'user/validatePassword', action: httpMethods.POST },
    // registerUser: { apiPath: 'user/signup', action: httpMethods.POST },
    signup: { apiPath: '/signup', action: httpMethods.POST },
    oauth: { apiPath: '/oauthlogin', action: httpMethods.POST },
    updateuser: { apiPath: '/user', action: httpMethods.PUT  },
    updatepassword: { apiPath: '/changepassword', action: httpMethods.PUT},
    users :{apiPath: '/user', action: httpMethods.GET}
};
