# Code Bit #1 Start
# Devise Gem with Bootstrap, Flash Messages

<% if notice.present? %>
	<p class="alert alert-info"><%= notice %></p>
<% end %>
<% if alert.present? %>
  <p class="alert alert-danger"><%= alert %></p>  
<% end %>

# Code Bit #1 End

# Code Bit #2 Start
# Checking if a new @whatever is valid

def create
  @whatever = Whatever.create(whatever_params)
  if @whatever.valid?
    redirect_to root_path
  else
    render :new, status: :unprocessable_entity
  end
end

# Code Bit #2 End