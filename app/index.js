var React = require('react');
var ReactDOM = require('react-dom');
var routes = require('./config/routes.js');

// var UserData = {
//   name: 'Kristina McElveen',
//   userName: 'kmcelveen',
//   pic: 'https://avatars.githubusercontent.com/u/6963932?v=3&s=460'
// };


// var ProfilePic = React.createClass({
//   render: function(){
//     console.log(this.props)
//     return <img src={this.props.pic} style={{height:100, width:100}} />   
//   }

// });


// var ProfileLink = React.createClass({
//   render: function(){
//     return (

//         <div> 
//           <a href={'https://github.com/' + this.props.userName}>
//           {this.props.userName}
//           </a>
//         </div>

//       )

//   }

// });

// var ProfileName = React.createClass({
//   render: function(){
//     return (
//       <div> {this.props.name} </div>
//     )
//   }
// });


// var Avatar = React.createClass({
//   render: function(){
//     return (

//       <div>
//         <ProfilePic pic={this.props.user.pic} />
//         <ProfileName name={this.props.user.name} />
//         <ProfileLink userName={this.props.user.userName} />
//       </div>
//     )
//   }
// })

ReactDOM.render(
  routes, 
  document.getElementById('app')
);

