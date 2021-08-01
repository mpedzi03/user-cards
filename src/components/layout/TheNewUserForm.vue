<template>
  <div @transitionend="removeTransitionClass" class="new-user-form" ref="new-user-form">
    <h2>Add New User Form</h2>
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="row">
            <h5>Account Info</h5>
            <div class="col">
              <div class="form-group" :class="{ 'form-group-error': $v.form.username.$error }">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" v-model.trim="$v.form.username.$model">
                <small v-if="$v.form.username.$error && !$v.form.username.required">Username is required</small>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group" :class="{ 'form-group-error': $v.form.password.$error }">
                <label for="password">Password</label>
                <input type="text" class="form-control" id="password" v-model.trim="$v.form.password.$model">
                <small v-if="$v.form.password.$error && !$v.form.password.required">Password is required</small>
                <small v-if="!$v.form.password.minLength">Password must be at least 8 characters</small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group" :class="{ 'form-group-error': $v.form.repeatPassword.$error }">
                <label for="repeat-password">Confirm Password</label>
                <input type="text" class="form-control" id="repeat-password" v-model.trim="$v.form.repeatPassword.$model">
                <small v-if="!$v.form.repeatPassword.sameAsPassword">Passwords do not match</small>
              </div>
            </div>
          </div>

          <hr>

          <h5>Personal Info</h5>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group" :class="{ 'form-group-error': $v.form.firstName.$error }">
                <label for="first-name">First Name</label>
                <input type="text" class="form-control" id="first-name" v-model.trim="$v.form.firstName.$model">
                <small v-if="$v.form.firstName.$error && !$v.form.firstName.required">First name is required</small>
                <small v-if="$v.form.firstName.$error && !$v.form.firstName.alphaNum">First name must be letters</small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group" :class="{ 'form-group-error': $v.form.lastName.$error }">
                <label for="last-name">Last Name</label>
                <input type="text" class="form-control" id="last-name" v-model.trim="$v.form.lastName.$model">
                <small v-if="$v.form.lastName.$error && !$v.form.lastName.required">Last name is required</small>
                <small v-if="$v.form.lastName.$error && !$v.form.lastName.alphaNum">Last name must be letters</small>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group" :class="{ 'form-group-error': $v.form.email.$error }">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" v-model.trim="$v.form.email.$model">
                <small v-if="$v.form.email.$error && !$v.form.email.required">Email is required</small>
                <small v-if="$v.form.email.$error && !$v.form.email.email">Email is invalid format</small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group" :class="{ 'form-group-error': $v.form.phone.$error }">
                <label for="phone">Phone</label>
                <input type="text" class="form-control" id="phone" v-model.trim="$v.form.phone.$model">
                <small v-if="$v.form.phone.$error && !$v.form.phone.required">Phone is required</small>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="form-group" :class="{ 'form-group-error': $v.form.website.$error }">
                <label for="website">Website</label>
                <input type="text" class="form-control" id="website" v-model.trim="$v.form.website.$model">
                <small v-if="$v.form.website.$error && !$v.form.website.required">Website is required</small>
                <small v-if="$v.form.website.$error && !$v.form.website.url">Website is invalid format</small>
              </div>
            </div>
          </div>

          <hr>

          <h5>Address Info</h5>
          <div class="row">
            <div class="col-md-6">
              <div class="form-group" :class="{ 'form-group-error': $v.form.address.street.$error }">
                <label for="address-street">Street</label>
                <input type="text" class="form-control" id="address-street" v-model.trim="$v.form.address.street.$model">
                <small v-if="$v.form.address.street.$error && !$v.form.address.street.required">Street is required</small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="address-suite">Suite</label>
                <input type="text" class="form-control" id="address-suite" v-model.trim="form.address.suite">
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="form-group" :class="{ 'form-group-error': $v.form.address.city.$error }">
                <label for="address-city">City</label>
                <input type="text" class="form-control" id="address-city" v-model.trim="$v.form.address.city.$model">
                <small v-if="$v.form.address.city.$error && !$v.form.address.city.required">City is required</small>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group" :class="{ 'form-group-error': $v.form.address.zipcode.$error }">
                <label for="address-zipcode">Zipcode</label>
                <input type="text" class="form-control" id="address-zipcode" v-model.trim="$v.form.address.zipcode.$model">
                <small v-if="$v.form.address.zipcode.$error && !$v.form.address.zipcode.required">Zipcode is required</small>
              </div>
            </div>
          </div>

          <hr>

          <h5>Company Info</h5>
          <div class="row">
            <div class="col">
              <div class="form-group" :class="{ 'form-group-error': $v.form.company.name.$error }">
                <label for="company-name">Name</label>
                <input type="text" class="form-control" id="company-name" v-model.trim="$v.form.company.name.$model">
                <small v-if="$v.form.company.name.$error && !$v.form.company.name.required">Company name is required</small>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="form-group" :class="{ 'form-group-error': $v.form.company.catchPhrase.$error }">
                <label for="company-catchphrase">Catchphrase</label>
                <input type="text" class="form-control" id="company-catchphrase" v-model.trim="$v.form.company.catchPhrase.$model">
                <small v-if="$v.form.company.name.$error && !$v.form.company.name.alphaNum">Catchphrase must be alphanumeric</small>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="form-group" :class="{ 'form-group-error': $v.form.company.bs.$error }">
                <label for="company-bs">BS</label>
                <input type="text" class="form-control" id="company-bs" v-model.trim="$v.form.company.bs.$model">
                <small v-if="$v.form.company.bs.$error && !$v.form.company.bs.alphaNum">Company BS must be alphanumeric</small>
              </div>
            </div>
          </div>

          <button type="submit" class="btn-primary mt-3">Add User</button>
          <p class="text-success" v-if="submitStatus === 'OK'">New user added!</p>
          <p class="text-danger" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
          <p class="text-info" v-if="submitStatus === 'PENDING'">Sending...</p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { required, alpha, alphaNum, minLength, email, sameAs, url } from 'vuelidate/lib/validators'

export default {
  name: 'TheNewUserForm',
  props: {
    newUserFormOpen: Boolean
  },
  data: function () {
    return {
      submitStatus: null,
      form: {
        username: '',
        password: '',
        repeatPassword: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        website: '',
        address: {
          street: '',
          suite: '',
          city: '',
          zipcode: ''
        },
        company: {
          name: '',
          catchPhrase: '',
          bs: ''
        }
      }
    }
  },
  computed: {
    users () {
      return this.$store.getters['users/userList']
    },
    userCount () {
      return this.$store.getters['users/userCount']
    }
  },
  validations: {
    form: {
      username: {
        required
      },
      password: {
        required,
        minLength: minLength(8)
      },
      repeatPassword: {
        sameAsPassword: sameAs('password')
      },
      firstName: {
        required,
        alpha
      },
      lastName: {
        required,
        alpha
      },
      email: {
        required,
        email
      },
      phone: {
        required
      },
      website: {
        required,
        url
      },
      address: {
        street: {
          required
        },
        city: {
          required
        },
        zipcode: {
          required
        }
      },
      company: {
        name: {
          required
        },
        catchPhrase: {
          alphaNum
        },
        bs: {
          alphaNum
        }
      }
    }
  },
  mounted () {
    document.addEventListener('click', this.checkIfClickOutsideDropdown)
  },
  watch: {
    newUserFormOpen: function () {
      this.$v.$reset()
      this.submitStatus = null
      this.openNewUserForm()
    }
  },
  methods: {
    submitForm () {
      this.submitStatus = null
      this.$v.$reset()

      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'

        const userInfo = {
          id: this.userCount + 1, // Need algo for this
          name: this.form.firstName + ' ' + this.form.lastName,
          username: this.form.username,
          email: this.form.email,
          phone: this.form.phone,
          website: this.form.website,
          address: {
            street: this.form.address.street,
            suite: this.form.address.suite || '',
            city: this.form.address.city,
            zipcode: this.form.address.zipcode
          },
          company: {
            name: this.form.company.name,
            catchPhrase: this.form.company.catchPhrase,
            bs: this.form.company.bs
          }
        }

        this.$store.dispatch('users/addUser', userInfo)
          .then(resp => {
            this.submitStatus = 'OK'

            const sortType = this.$store.getters['users/mostRecentSortType']
            this.$store.dispatch('users/sortUsers', sortType)

            this.hideForm()
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    removeTransitionClass () {
      this.$refs['new-user-form'].classList.remove('form-transition', 'form-visible', 'form-hidden')
    },
    openNewUserForm () {
      this.$refs['new-user-form'].classList.contains('form-active')
        ? this.hideForm()
        : this.showForm()
    },
    checkIfClickOutsideDropdown (e) {
      const isClickInsideForm = this.$refs['new-user-form'].contains(e.target)
      const isFormActive = this.$refs['new-user-form'].classList.contains('form-active')
      const isClickOffFormBtn = this.$parent.$refs['new-user-form-btn'] && !this.$parent.$refs['new-user-form-btn'].contains(e.target)

      if (!isClickInsideForm && isFormActive && isClickOffFormBtn) this.hideForm()
    },
    hideForm () {
      const form = this.$refs['new-user-form']
      form.classList.remove('form-active')
      form.classList.add('form-transition', 'form-hidden')
    },
    showForm () {
      const form = this.$refs['new-user-form']
      form.classList.add('form-visible')
      form.clientWidth //eslint-disable-line
      form.classList.add('form-transition', 'form-active')
    }
  }
}
</script>

<style>
.new-user-form {
  padding: 15px 20px;
  margin: 15px 20px;
  display: none;
  opacity: 0;
}

.new-user-form h5 {
  margin-bottom: 10px;
  font-weight: bold;
}

.form-visible {
  display: block;
}

.form-active {
  display: block;
  opacity: 1;
}

.form-transition.form-visible {
  display: block;
  opacity: 1;
}

.form-transition {
  transition: opacity 0.5s ease;
}

.form-hidden {
  display: block;
  opacity: 0;
}

.form-group-error {
  color: red;
}

.form-group-error input {
  border-color: red
}

.form-group-error small {
  display: block;
}
</style>
