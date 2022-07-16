async function createNewRoleSubmit() {
  const roleName = document.getElementById('roleName').value;
  createNewLeague({ name: leagueName, image: imageUrl }).finally(() => {
    getAllLeagues();
  });
}
