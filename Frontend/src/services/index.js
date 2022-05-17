import service from '../config/service'

export const postOTP = (phoneDetails) => {
    return service.post(`/verification/startOTP`, phoneDetails)
}

export const verifyOTP = (otpDetails) => {

    return service.post(`/verification/verifyOTP`, otpDetails)
}

export const postEmailOTP = (emailDetails) => {
    return service.post(`/verification/startEmailOTP`, emailDetails)
}

export const verifyEmailOTP = (otpDetails) => {

    return service.post(`/verification/verifyEmailOTP`, otpDetails)
}









