
In this application, matrix or 2-D array data structure is used to store booked seats(represented by 0's) and available seats (represented by 1's) in the backend. 

To implement this 2 Routes Created

- 1. /seats -> GET request -> Gives you entities in database collection;
- 2. /update/seats -> PATCH request -> According to input value; matrix is updated;

matrix is consists of 0's and 1's ; 0's indicates not-booked seats and vice versa;

Inputs:
- Only one Input expected from User i.e No_of_seats ;

Outputs:
- Updated Matrix or Errors if Erros occured or EdgeCase output;

Status Codes:

- 200 -> Indicates user resource is fetched successfully / updated.
- 201 -> New User Resource is Created;
- 400 -> Error occured in request;




