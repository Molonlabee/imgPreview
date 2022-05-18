
<!-- AXIOS PRACTICE
handleDelete() {
   axios
       .delete(`/api/profile/${this.props.profile.id}`)
       .then(res => this.props.deleteProfile(res.data))
      .catch(err => console.log(err));
}
DB CONTROLLER
const removeProfile = async (req, res) => {
    const db = req.app.get('db');
    const { prod_id } = req.params;

    const updatedItems = await db.removeProfile(req.session.user.user_id, prod_id);
    res.status(200).json(updatedProfiles);
} -->