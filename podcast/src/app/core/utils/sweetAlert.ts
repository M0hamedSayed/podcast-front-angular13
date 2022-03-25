import Swal from "sweetalert2";

export const alertConfig = (toast: any, cb: Function = () => false) => {
    return Swal.mixin({
        toast: toast,
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (el) => {
            console.log(el);

            el.addEventListener('mouseenter', Swal.stopTimer)
            el.addEventListener('mouseleave', Swal.resumeTimer)
        },
        didDestroy: () => {
            cb()
        },
    })
}