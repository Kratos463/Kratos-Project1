const UserDetails = require("../../models/User/userDetails.model");
const UserLogin = require("../../models/User/userLogin.model");
const { asyncHandler } = require("../../utils/asyncHandler");

const registerUser = asyncHandler(async (req, res) => {
    const { username, sponser, firstName, lastName, address, postalCode, city, country, email, password,
        pp_tc, atc_id, newsLetter } = req.body

    // check all the fields are required
    if ([username, sponser, firstName, lastName, address, postalCode, city, country, email, password,
        pp_tc, atc_id, newsLetter ].some((field) =>
        field?.trim() === "")) {
        throw new ApiError(400, "All fields are required")
    }

    // check the user with username or email is already exists or not
    const existedUser = await UserLogin.findOne({
        username: username
    })
    if (existedUser) {
        throw new ApiError(409, "User with email or username already exists")
    }

    const newUserDetails = await UserDetails.create({
        username: username,
        sponser: sponser,
        firstName: firstName,
        lastName: lastName,
        address: address,
        postalCode: postalCode,
        city: city,
        country: country,
        pp_tc: pp_tc,
        atc_id: atc_id,
        newsLetter: newsLetter
    })

})