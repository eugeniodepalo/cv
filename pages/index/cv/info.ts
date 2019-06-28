interface Info {
  fullName: string
  jobTitle: string
  profilePictureUrl: string
  traits: Array<string>
  status: string
  email: string
  githubHandle: string
  linkedinHandle: string
}

const info: Info = {
  fullName: 'Eugenio Depalo',
  jobTitle: 'Senior Front-end Developer',
  profilePictureUrl: '/static/profilePicture.png',
  traits: ["I love intellectual challenges that just won't let me sleep."],
  status: "I'm currently based in London. Open to both remote and central London contracting gigs.",
  email: 'eugeniodepalo@gmail.com',
  githubHandle: 'eugeniodepalo',
  linkedinHandle: 'eugenio-depalo-4664472a'
}

export default info
