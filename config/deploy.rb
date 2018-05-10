# config valid only for current version of Capistrano
lock '3.10.2'

set :application, 'chat-space'
set :repo_url,  'git@github.com:nariatsu1202/chat-space.git'

set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system', 'public/uploads')

set :rbenv_type, :user
set :rbenv_ruby, '2.3.1'

set :ssh_options, auth_methods: ['ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC0uxXB7EckAe69BVVSloij1ONl7Gjou12UBqIcunQHJYXIN5dX30/UfCt1iB3RDPArNRRLEzWcb7mCaNWLRPuSVcabVC4FeZGuyYLxbR+sBkbz3Y48SRrv7FSFIKHTmzuIHjHeuzSsRcfEm1KStZoC53RSnYgF2qZkKVR0yyq2RHO73VdeUL6fuXVq59QdnYl86eYBakU6CJ+jPp4JBbkXPtV07Gy7apNx6gND9JknCBe51MnoDLBMslqZjrpnqlxy2tbQJKE4fJAQaERX3IZ24lUz/iYwBKGs0XU4oZir8PXvp/3RVBj8ZxJISx7xd3Xtpyu0IS8UpW/PmKmvoFPkKXlX5KP2NoMW0hk6Pu5CBEz9nUKg2ZlnEgQDLjbobJ28yfPKj1lZFvIzKUznjw7CdemjC3EB9VAEGU2ezvbGVcbNramDU/Q8ytcog3/gPYLc02/4OV5vZvHQG7dMybb9ek3NPczyRTZn7BmGzh6POaGTrSeX5GLrPvsNa5ajmbzs4rBkli4z9gVE5Uk5/w/OD+KRPchQLiwXeAzS2t9idV1FLachmMh7Avga50o7BaY7+6pvN43y8bJo/4vfUayFakGx7blcy0OzrFgXly4wJahiV+WgnKHYzrxAlubVA8gT7ygB5w7nOvFDgDLMcTRa2DMSoj7G2N3NIhlMaEEfoQ== ec2-user@ip-172-31-42-143'],
                  keys: ['/Users/narita/.ssh/chat-space-key-pair.pem']

set :unicorn_pid, -> { "#{shared_path}/tmp/pids/unicorn.pid" }
set :unicorn_config_path, -> { "#{current_path}/config/unicorn.rb" }
set :keep_releases, 5

after 'deploy:publishing', 'deploy:restart'
namespace :deploy do
  task :restart do
    invoke 'unicorn:restart'
  end
end
