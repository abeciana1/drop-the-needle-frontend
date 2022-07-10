const setExpirationDate = (
    date: Date
) => {
    const newDate = new Date(date);
    newDate.setHours(newDate.getHours() + 1);
    return newDate;
}

export const setCookieOptions = (
    date: Date,
) => {
    
    const expirationDate = setExpirationDate(date)

    let cookieOptions = {
        httpOnly: true,
        sameSite: "Strict",
        path: "/",
        maxAge: 3600000,
        secure: true, //! set to specific condition for enhanced security
        expires: expirationDate
    }

    return cookieOptions
}
