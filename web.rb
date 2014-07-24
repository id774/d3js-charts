require 'sinatra'

get '/' do
  erb :index
end

get '/stacked-area-chart' do
  erb :stacked_area_chart
end
get '/data-clips' do
  erb :data_clips
end
