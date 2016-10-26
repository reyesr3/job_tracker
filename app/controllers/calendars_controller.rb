class CalendarsController < ApplicationController
	def index
	end

	def redirect
		client = Signet::OAuth2::Client.new({
		    client_id: "237984503698-0up1moakeos59bhh8s3s1bn3ekbhakhn.apps.googleusercontent.com",
		    client_secret:"8GREE3NktNkDK-mtzu9BRwgc",
		    authorization_uri: 'https://accounts.google.com/o/oauth2/auth',
		    scope: "https://www.googleapis.com/auth/calendar",
		    redirect_uri: 'http://localhost:3000/oauthcallback'
		})

		redirect_to client.authorization_uri.to_s
	end

	def callback 
	  client = Signet::OAuth2::Client.new({
	    client_id: "237984503698-0up1moakeos59bhh8s3s1bn3ekbhakhn.apps.googleusercontent.com",
	    client_secret: "8GREE3NktNkDK-mtzu9BRwgc",
	    token_credential_uri: 'https://accounts.google.com/o/oauth2/token',
	    redirect_uri: 'http://localhost:3000/oauthcallback',
	    code: params[:code]
	  })

	  response = client.fetch_access_token!

	  session[:access_token] = response['access_token']

	  redirect_to :back
	end

	def calendars
	  client = Signet::OAuth2::Client.new(access_token: session[:access_token])

	  service = Google::Apis::CalendarV3::CalendarService.new

	  service.authorization = client

	  @calendar_list = service.list_calendar_lists

	  redirect_to :back
	end

	def addevent
		render json: {}

		client = Signet::OAuth2::Client.new(access_token: session[:access_token])
		service = Google::Apis::CalendarV3::CalendarService.new
		service.authorization = client
		puts params

		event = Google::Apis::CalendarV3::Event.new(
		  summary: params[:summary],
		  location: params[:location],
		  description: params[:description],
		  start: {
		    date_time: params[:startDate],
		    time_zone: 'America/Los_Angeles',
		  },
		  end: {
		    date_time: params[:endDate],
		    time_zone: 'America/Los_Angeles',
		  },
		  reminders: {
		    use_default: true,
		  },
		)

		result = service.insert_event('primary', event)
		puts "Event created: #{result.html_link}"	
    end
end
