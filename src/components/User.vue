<template>
  <base-card>
    <div class="user-section border mt-3 rounded-2 bg-white">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header bg-white">
              <h5 class="card-title fw-bold"><b-icon-person/> {{user.name}} ({{user.username}})</h5>
            </div>
            <div class="card-body">
              <div>
                <span class="border p-1 me-2 rounded"><b-icon-mailbox/> {{user.email}}</span>
                <span class="border p-1 me-2 rounded"><b-icon-telephone/> {{user.phone}}</span>
                <span class="border p-1 me-2 rounded"><b-icon-ui-checks/> {{user.website}}</span>
              </div>
              <hr>
              <div class="row">
                <div class="col border-end">
                  <p class="fw-bold text-secondary"><b-icon-map/> Address Info</p>
                  <div>{{user.address.street}}<br>
                    {{user.address.suite}}<br>
                    {{user.address.city}}, {{user.address.zipcode}}</div>
                </div>
                <div class="col">
                  <p class="fw-bold text-secondary"><b-icon-house-door/> Company Info</p>
                  <div>{{user.company.name}}<br>
                    {{user.company.catchPhrase}}<br>
                    {{user.company.bs}}</div>
                </div>
              </div>
            </div>
          </div>
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
