<template>
  <base-card>
    <div class="user-section text-center">

      <div class="row">
        <div class="col-8 offset-2 personal-info-section">
          <h2>{{user.name}}</h2>
          <h3>( <b-icon-person/> {{user.username}} )</h3>
          <div>
            <p><b-icon-mailbox/> {{user.email}}</p>
            <p><b-icon-telephone/> {{user.phone}}</p>
            <p><b-icon-ui-checks/> {{user.website}}</p>
          </div>
        </div>
      </div>

      <hr>

      <div class="row other-info-section">
        <div class="col-md-6 mb-3">
          <h3 class="user-info-heading">Address Info</h3>
          <h4>{{user.address.street}}</h4>
          <h4>{{user.address.suite}}</h4>
          <h4>{{user.address.city}}, {{user.address.zipcode}}</h4>
        </div>
        <div class="col-md-6">
          <h3 class="user-info-heading">Company Info</h3>
          <h4>{{user.company.name}}</h4>
          <h4>{{user.company.catchPhrase}}</h4>
          <h4>{{user.company.bs}}</h4>
        </div>
      </div>

    </div>
  </base-card>
</template>

<script>
import BaseCard from './ui/BaseCard.vue'

export default {
  name: 'User',
  components: {
    BaseCard
  },
  props: {
    user: Object
  }
}
</script>
