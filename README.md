# DB設計

## users table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
|email|string|null: false|

### Association
has_many :messages
has_many :groups, through: :members
has_many :members

## groups table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
has_many :users, through: :members
has_many :messages
has_many :members

## members table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Associtation
- belongs_to :group
- belongs_to :user

## messages table
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
belongs_to :group
belongs_to :user
