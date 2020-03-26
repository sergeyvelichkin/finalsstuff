
module.exports = (app, passport) => {    

    app.post('/signin', (req, res, next) => {
        
        return passport.authenticate('local-signin', (err, token, userData) => {
          if (err) {
            if (err.name === 'IncorrectCredentialsError') {
              return res.status(400).json({
                success: false,
                message: err.message
              });
            }
      
            return res.status(400).json({
              success: false,
              message: 'Could not process the form.'
            });
          }
      
          
          return res.json({
            success: true,
            message: 'You have successfully logged in!',
            token,
            user: userData
          });
        })(req, res, next);
      });
      

    app.post('/signup', (req, res, next) => {
        
      return passport.authenticate('local-signup', (err,token,userData) => {
          
        if (!token) {
            
            return res.json({
                success: false,
                message: userData.message,

              });
          }
            
      
          return res.status(200).json({
            success: true,
            message: 'You have successfully signed up! You will be redirectes to the main page',
            token,
            user:userData,
            redirectUrl: '/'
          });
        })(req, res, next);
      });

      app.get('/signout', function(req, res){
          res.clearCookie('connect.sid');
        
          return res.status(200).json({
            success:true,
            redirectUrl: '/'
        })
       

      });
}