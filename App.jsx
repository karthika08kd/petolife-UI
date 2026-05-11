import { useState } from "react"

function App() {

  const [petName, setPetName] = useState("")
  const [breed, setBreed] = useState("")
  const [age, setAge] = useState("")
  const [owner, setOwner] = useState("")

  const [generated, setGenerated] = useState(false)
  const [uploaded, setUploaded] = useState(false)
  const [booked, setBooked] = useState(false)

  const petId = "PTL-" + Math.floor(Math.random() * 100000)

  return (

    <div className="bg-gradient-to-br from-white to-teal-50 text-gray-900 overflow-hidden min-h-screen">

      {/* ================= NAVBAR ================= */}

      <nav className="flex justify-between items-center px-6 md:px-12 py-6 sticky top-0 bg-white/80 backdrop-blur-md z-50">

        <div className="flex items-center gap-3">

          <div className="bg-teal-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg">
            🐾
          </div>

          <div>

            <h1 className="text-3xl font-bold text-teal-600">
              PetOlife
            </h1>

            <p className="text-xs text-gray-500">
              One Life. One Identity.
            </p>

          </div>

        </div>

        <div className="hidden md:flex gap-8 font-medium">

          <a href="#home" className="hover:text-teal-500 transition">
            Home
          </a>

          <a href="#registration" className="hover:text-teal-500 transition">
            Register
          </a>

          <a href="#dashboard" className="hover:text-teal-500 transition">
            Dashboards
          </a>

          <a href="#about" className="hover:text-teal-500 transition">
            About
          </a>

        </div>

        <a href="#registration">

          <button className="bg-teal-500 hover:bg-teal-600 transition text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105">
            Get Started
          </button>

        </a>

      </nav>

      {/* ================= HERO SECTION ================= */}

      <section
        id="home"
        className="grid md:grid-cols-2 items-center px-6 md:px-12 py-20 gap-16"
      >

        {/* LEFT */}

        <div>

          <div className="inline-block bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Trusted Digital Identity For Pets
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            One Digital Identity

            <span className="text-teal-500">
              {" "}For Every Pet 🐾
            </span>

          </h1>

          <p className="text-gray-600 mt-8 text-lg leading-relaxed">

            Secure vaccination records, health history,
            emergency recovery support, and veterinary access
            all in one trusted digital profile.

          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <a href="#registration">

              <button className="bg-teal-500 hover:bg-teal-600 transition text-white px-8 py-4 rounded-2xl shadow-xl hover:scale-105">
                Get Started
              </button>

            </a>

            <a href="#registration">

              <button className="border-2 border-teal-500 hover:bg-teal-50 transition px-8 py-4 rounded-2xl hover:scale-105">
                Explore Protocol
              </button>

            </a>

          </div>

          {/* Trusted */}

          <div className="flex items-center gap-6 mt-10">

            <div className="flex -space-x-4">

              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-12 h-12 rounded-full border-4 border-white"
              />

              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-12 h-12 rounded-full border-4 border-white"
              />

              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                className="w-12 h-12 rounded-full border-4 border-white"
              />

            </div>

            <div>

              <h3 className="font-bold text-lg">
                2,000+ Happy Pet Parents
              </h3>

              <p className="text-gray-500">
                Trusted by veterinarians worldwide
              </p>

            </div>

          </div>

        </div>

        {/* RIGHT CARD */}

        <div className="relative flex justify-center">

          <div className="absolute w-80 h-80 bg-teal-200 rounded-full blur-3xl opacity-40"></div>

          <div className="relative bg-white rounded-[40px] shadow-2xl p-6 w-[420px] z-10 border border-gray-100 hover:scale-105 transition duration-300">

            <img
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1200&auto=format&fit=crop"
              alt="pet"
              className="rounded-3xl h-64 w-full object-cover"
            />

            <div className="mt-6">

              <div className="flex justify-between items-center">

                <div>

                  <h2 className="text-3xl font-bold">
                    Bruno 🐶
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Golden Retriever • 2 Years
                  </p>

                </div>

                <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold">
                  Verified
                </div>

              </div>

              <div className="grid grid-cols-2 gap-4 mt-6">

                <div className="bg-teal-50 rounded-2xl p-4">

                  <p className="text-gray-500 text-sm">
                    Vaccination
                  </p>

                  <h3 className="text-xl font-bold mt-1">
                    Updated
                  </h3>

                </div>

                <div className="bg-orange-50 rounded-2xl p-4">

                  <p className="text-gray-500 text-sm">
                    Health Score
                  </p>

                  <h3 className="text-xl font-bold mt-1">
                    98%
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= REGISTRATION ================= */}

      <section
        id="registration"
        className="px-6 md:px-12 py-24 bg-white"
      >

        <div className="text-center">

          <p className="text-teal-500 font-semibold uppercase tracking-widest">
            Create Pet Identity
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Register Your Pet
          </h2>

        </div>

        <div className="max-w-3xl mx-auto mt-16 bg-white shadow-2xl rounded-[40px] p-10">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Pet Name"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              className="border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-teal-500"
            />

            <input
              type="text"
              placeholder="Breed"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
              className="border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-teal-500"
            />

            <input
              type="text"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-teal-500"
            />

            <input
              type="text"
              placeholder="Owner Name"
              value={owner}
              onChange={(e) => setOwner(e.target.value)}
              className="border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-teal-500"
            />

          </div>

          <button
            onClick={() => setGenerated(true)}
            className="w-full mt-8 bg-teal-500 hover:bg-teal-600 transition text-white py-4 rounded-2xl font-bold text-lg shadow-xl"
          >
            Generate Pet Identity
          </button>

        </div>

      </section>

      {/* ================= GENERATED CARD ================= */}

      {generated && (

        <section
          id="dashboard"
          className="px-6 md:px-12 py-24 bg-gray-50"
        >

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-[30px] p-8 shadow-xl">

              <h3 className="text-2xl font-bold">
                Pet Profile 🐾
              </h3>

              <div className="mt-6 space-y-3 text-gray-600">

                <p>Name: {petName}</p>
                <p>Breed: {breed}</p>
                <p>Age: {age}</p>
                <p>Owner: {owner}</p>

                <div className="bg-teal-50 p-4 rounded-2xl mt-4">

                  <p className="text-sm text-gray-500">
                    Pet ID
                  </p>

                  <h3 className="font-bold text-xl">
                    {petId}
                  </h3>

                </div>

              </div>

            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-xl">

              <h3 className="text-2xl font-bold">
                Upload Records 📄
              </h3>

              <button
                onClick={() => setUploaded(true)}
                className="mt-6 bg-teal-500 text-white py-3 px-6 rounded-2xl hover:bg-teal-600 transition"
              >
                Upload Record
              </button>

              {uploaded && (

                <p className="text-green-600 mt-4 font-semibold">
                  Medical Record Uploaded Successfully ✅
                </p>

              )}

            </div>

            <div className="bg-white rounded-[30px] p-8 shadow-xl">

              <h3 className="text-2xl font-bold">
                Vet Appointment 🩺
              </h3>

              <button
                onClick={() => setBooked(true)}
                className="mt-6 bg-black text-white py-3 px-6 rounded-2xl hover:opacity-90 transition"
              >
                Book Vet
              </button>

              {booked && (

                <p className="text-teal-600 mt-4 font-semibold">
                  Appointment Booked Successfully 🩺
                </p>

              )}

            </div>

          </div>

          {/* QR SECTION */}

          <div className="max-w-4xl mx-auto bg-gradient-to-r from-teal-500 to-cyan-500 rounded-[40px] p-16 text-white shadow-2xl mt-20 text-center">

            <h2 className="text-5xl font-bold">
              Emergency QR Recovery
            </h2>

            <p className="mt-6 text-xl text-white/90">

              Anyone can scan the QR code
              to reconnect lost pets instantly.

            </p>

            <div className="flex justify-center mt-10">

              <div className="bg-white p-6 rounded-[30px]">

                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${petId}`}
                  alt="qr"
                  className="rounded-2xl"
                />

              </div>

            </div>

            <a
              href={`https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${petId}`}
              download
            >

              <button className="mt-8 bg-black text-white px-8 py-4 rounded-2xl hover:scale-105 transition">
                Download QR
              </button>

            </a>

          </div>

          {/* NOTIFICATIONS */}

          <div className="max-w-6xl mx-auto mt-20 grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-[30px] shadow-xl">

              <h3 className="text-xl font-bold">
                Vaccine Reminder 💉
              </h3>

              <p className="text-gray-600 mt-4">
                Rabies vaccine due in 5 days.
              </p>

            </div>

            <div className="bg-white p-8 rounded-[30px] shadow-xl">

              <h3 className="text-xl font-bold">
                Vet Appointment 🩺
              </h3>

              <p className="text-gray-600 mt-4">
                Appointment scheduled tomorrow.
              </p>

            </div>

            <div className="bg-white p-8 rounded-[30px] shadow-xl">

              <h3 className="text-xl font-bold">
                Emergency Alert 🚨
              </h3>

              <p className="text-gray-600 mt-4">
                QR identity is active and secure.
              </p>

            </div>

          </div>

        </section>

      )}

      {/* ================= CTA ================= */}

      <section className="px-6 md:px-12 py-24">

        <div className="bg-black rounded-[40px] p-16 text-white text-center shadow-2xl">

          <h2 className="text-5xl font-bold leading-tight">
            Every Pet Deserves A Trusted Identity.
          </h2>

          <p className="mt-6 text-xl text-gray-300">

            Join thousands of pet parents and veterinarians
            building the future of connected pet care.

          </p>

          <a href="#home">

            <button className="mt-10 bg-teal-500 hover:bg-teal-600 transition font-bold px-10 py-4 rounded-2xl hover:scale-105 shadow-xl">
              Join PetOlife
            </button>

          </a>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer
        id="about"
        className="bg-black text-white py-16 text-center"
      >

        <div className="flex justify-center items-center gap-3">

          <div className="bg-teal-500 w-12 h-12 rounded-full flex items-center justify-center text-2xl">
            🐾
          </div>

          <h1 className="text-4xl font-bold">
            PetOlife
          </h1>

        </div>

        <p className="text-gray-400 mt-6">
          Building trusted digital identity infrastructure for pets.
        </p>

        <p className="text-gray-500 mt-6 text-sm">
          © 2025 PetOlife. All rights reserved.
        </p>

      </footer>

    </div>

  )
}

export default App