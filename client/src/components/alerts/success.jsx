import React from 'react'

const success = () => {

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
      });



      
  return (
    <div>success</div>
  )
}

export default success