json.messages @messages.each do |message|
  json.name message.user.name
  json.date message.created_at.strftime
  json.content message.content
  json.image message.image
  json.id message.id
end
