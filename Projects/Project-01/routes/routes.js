// controller
const exprss = require("express")
const router = exprss.Router();

const {
    handleGetAllUsers,
    handlegetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateUser
} = require("../controllers/controller")

router.route("/").get(handleGetAllUsers).post(handleCreateUser);

router.get("/",async(req,res) => {
    const allDbUsers = await User.find({});
    const html = `
        <ul>
            ${allDbUsers.map((users) => `<li>${users.first_name} - ${users.email}</li>`).join("")}
        </ul>
    `;
    res.send(html);
});


router.route("/:id")
    .get(handlegetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUserById)

// router.post("/",handleCreateUser)
module.exports = router