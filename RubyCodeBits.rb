Devise Gem with Bootstrap, Flash Messages

# <% if notice.present? %>
# 	<p class="alert alert-info"><%= notice %></p>
# <% end %>
# <% if alert.present? %>
#   <p class="alert alert-danger"><%= alert %></p>  
# <% end %>

Checking if a new @whatever is valid

# def create
#   @whatever = Whatever.create(whatever_params)
#   if @whatever.valid?
#     redirect_to root_path
#   else
#     render :new, status: :unprocessable_entity
#   end
# end