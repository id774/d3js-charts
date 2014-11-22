require 'sinatra'

get '/' do
  haml :index
end

get '/stacked-area-chart' do
  haml :stacked_area_chart
end

get '/data-clips' do
  haml :data_clips
end

get '/scatter-plot' do
  haml :scatter_plot
end

get '/pie' do
  haml :pie
end

get '/multi-bar-horizontal' do
  haml :multi_bar_horizontal
end

get '/multi-bar' do
  haml :multi_bar
end

get '/cumulative-line' do
  haml :cumulative_line
end

get '/discrete-bar' do
  haml :discrete_bar
end
