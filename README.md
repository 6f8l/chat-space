# DB設計

## users table
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|

### Association
has_many :messages
has_many :groups, through: :members

## groups table
|Column|Type|Options|
|------|----|-------|
|name|string|null, false|

### Association
has_many :users
has_many :messages, through: :members

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
|body|text|null: false|
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
belongs_to :group
belongs_to :member
