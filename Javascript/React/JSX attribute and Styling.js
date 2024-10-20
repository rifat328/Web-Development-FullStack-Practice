import React from "react";
import ReactDOM from "react-dom";

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div className="foodPics">
      <img src={img} alt="lorium picsum " />
    </div>
  </div>,
  document.getElementById("root")
);

// evan though this work bec of react compiler but in some situation it will
// show error , and might break , in react way class is => clasName="heading"
// ReactDOM.render(
//   <div>
//     <h1 class="heading">My Favourite Foods</h1>
//     <ul>
//       <li>Bacon</li>
//       <li>Jamon</li>
//       <li>Noodles</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

// in jsx convension every html attribute must be cameleCase,
// in normal html it is all lowercase
//attribute global or local
// ReactDOM.render(
//   <div>
//     <h1 className="heading" contentEditable="true" spellCheck="false">
//       My Favourite Foods
//     </h1>
//     <ul>
//       <li>Bacon</li>
//       <li>Jamon</li>
//       <li>Noodles</li>
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <div>
//     <h1 className="heading" contentEditable="true" spellCheck="false">
//       My Favourite Foods
//     </h1>
//     <div className="foodPics">
//       <img
//         className="food-pics"
//         src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/20/7e/32/caption.jpg?w=1200&h=-1&s=1"
//         alt="Chicken "
//       />
//       <img
//         className="food-pics"
//         src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/ef/39/77/shawarma-wrap-all-the.jpg?w=700&h=-1&s=1"
//         alt="shawarma"
//       />
//       <img
//         className="food-pics"
//         src="https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-recipe-chicken-500x375.jpg"
//         alt="biryani"
//       />
//     </div>
//   </div>,
//   document.getElementById("root")
// );
