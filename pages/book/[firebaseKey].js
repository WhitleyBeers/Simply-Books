// import React from 'react';

// export default function ViewBook() {
//   // TODO: grab firebaseKey from url
//   // TODO: make call to API layer to get the data

//   return (
//     <div className="mt-5 d-flex flex-wrap">
//       <div className="d-flex flex-column">
//         <img src={bookDetails.image} alt={bookDetails.title} style={{ width: '300px' }} />
//       </div>
//       <div className="text-white ms-5 details">
//         <h5>
//           {bookDetails.title} by {bookDetails.authorObject?.first_name} {bookDetails.authorObject?.last_name}
//           {bookDetails.authorObject?.favorite ? ' 🤍' : ''}
//         </h5>
//         Author Email: <a href={`mailto:${bookDetails.authorObject?.email}`}>{bookDetails.authorObject?.email}</a>
//         <p>{bookDetails.description || ''}</p>
//         <hr />
//         <p>
//           {bookDetails.sale
//             ? `🏷️ Sale $${bookDetails.price}`
//             : `$${bookDetails.price}`}
//         </p>
//       </div>
//     </div>
//   );
// }
