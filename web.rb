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

get '/scatter-plot' do
  erb :scatter_plot
end

get '/pie' do
  erb :pie
end

get '/multi-bar-horizontal' do
  erb :multi_bar_horizontal
end

get '/multi-bar' do
  erb :multi_bar
end
