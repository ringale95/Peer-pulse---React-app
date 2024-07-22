//imports
import userRouter from './users-routes.js';
import eventRoutes from './eventRoutes.js';
import housingRoutes from './housing-routes.js';
import blogRoutes from './blogs-routes.js';
import redeployRoutes from './redeploy-routes.js';
//routing requests to path specific routers
export default (app) => {
    app.use("/users", userRouter);
    app.use('/events', eventRoutes);
    app.use('/housings', housingRoutes);
    app.use('/blogs', blogRoutes);
    app.use('/redeploy', redeployRoutes)
}