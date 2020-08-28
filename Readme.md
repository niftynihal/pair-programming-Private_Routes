Private Routes

Problem :

    Create the following pages:
    a home page with a welcome component
    a login page with a login component
    a dashboard page with a dashboard component that says Welcome to Dashboard
    a settings page which says Settings
    keep. pages in Pages folder
    keep all routes inside a Routes file inside Pages
    keep components in Components folder

    A user cannot enter the dashboard page unless they are logged in
    create a component PrivateRoutes, and keep the dashboard routes, and Settings component in that
    the Private Routes should be kept in a route that matches /dashboard
    use Redirect, and redirect the user back to the login page if the user tries to access the dashboard pages

Routes:

    Home - /

    Login - /login

    PrivateRoutes - /dashboard
        Dashboard - /dashboard
        Settings - /dashboard/settings

    use Context Provider to manage the auth state
