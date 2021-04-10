

const ROLE = {
  ADMIN: "admin",
  BASIC: "basic"
}

module.exports = {
  ROLE: ROLE,
  users: [
    {
      id: 1, name: "Valentine", role: ROLE.ADMIN
    },
    {
      id: 2, name: "David", role: ROLE.BASIC
    },
    {
      id: 3, name: "Simon", role: ROLE.BASIC
    }
  ],

  projects: [
    {
      id: 1, name: "Valentine's Project", userId: 1
    },
    {
      id: 2, name: "David's Project", userId: 2
    },
    {
      id: 3, name: "Simon's Project", userId: 3
    }
  ]
}
