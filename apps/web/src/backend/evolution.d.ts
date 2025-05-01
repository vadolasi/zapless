export interface paths {
    "/instance/create": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Create Instance */
        post: operations["createInstance-u210t7gne5d"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instance/fetchInstances": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch Instances
         * @description Returns the instance with the name informed in the parameter, or all the instances if empty.
         */
        get: operations["fetchInstances-benzy24hue5"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instance/connect/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Instances Connect
         * @description Generates and returns the QR code for WhatsApp connection
         */
        get: operations["instanceConnect-2ma74b8z1om"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instance/restart/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Restart Instance
         * @description Restarts the instance
         */
        put: operations["restartInstance-mkd6178ob9l"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instance/connectionState/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Connection State
         * @description Gets the state of the connection
         */
        get: operations["connectionState-zd2w3o1rdbd"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instance/logout/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Logout Instance
         * @description Makes logout on instance
         */
        delete: operations["logoutInstance-h8g511j89pi"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instance/delete/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete Instance
         * @description Delete instance
         */
        delete: operations["deleteInstance-ieo63sqkdrl"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/instance/setPresence/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Set Presence
         * @description Deletes instance
         */
        post: operations["setPresence-g5bqsorbsos"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webhook/set/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Set Webhook
         * @description Set Webhook for instance
         */
        post: operations["setWebhook-n4c56cbdp8"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/webhook/find/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find Webhook
         * @description Fetch Webhook configuration
         */
        get: operations["findWebhook-gomk9hb8eo4"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settings/set/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Set Settings
         * @description Set settings
         */
        post: operations["setSettings-g2vdg40qdgw"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/settings/find/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find Webhook
         * @description Fetch Webhook configuration
         */
        get: operations["findWebhook-w4rjjnh1avk"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/message/sendText/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send Text
         * @description Send plain text message
         */
        post: operations["sendText-s2v3zraho1"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/message/sendMedia/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send Media
         * @description Send media message
         */
        post: operations["sendMedia-zw42aj4xbwm"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/message/sendWhatsAppAudio/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send WhatsApp Audio
         * @description Send WhatsApp Audio
         */
        post: operations["sendWhatsAppAudio-r4jwy1c4yfr"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/message/sendSticker/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send Sticker
         * @description Send Sticker
         */
        post: operations["sendSticker-8or31ftwses"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/message/sendStatus/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send Status
         * @description Post WhatsApp status (stories)
         */
        post: operations["sendStatus-1dip7warejm"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/message/sendLocation/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send Location
         * @description Send Location
         */
        post: operations["sendLocation-9i07zlhqyni"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/message/sendContact/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send Contact
         * @description Send Contact
         */
        post: operations["sendContact-xt1kjcfnxtf"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/message/sendReaction/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send Reaction
         * @description Send Reaction
         */
        post: operations["sendReaction-f2sfrzo2dbb"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/message/sendPoll/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send Poll
         * @description Send Poll
         */
        post: operations["sendPoll-qer1iikdxib"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/message/sendList/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send List
         * @description Send List
         */
        post: operations["sendList-x8j9s0go4y8"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/message/sendButtons/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send Buttons
         * @description Send Buttons
         */
        post: operations["sendList-2wjgnyn91nf"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/whatsappNumbers/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * WhatsApp Numbers
         * @description Check if numbers are on WhatsApp
         */
        post: operations["whatsappNumbers-g319xq8bgpm"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/markMessageAsRead/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Mark Message As Read
         * @description Mark message as read
         */
        post: operations["markMessageAsRead-knx97o8q6qp"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/markChatUnread/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Mark Message As Unread
         * @description Mark message as read
         */
        post: operations["markMessageAsRead-s36hvqehrr"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/archiveChat/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Archive Chat
         * @description Archive Chat
         */
        post: operations["archiveChat-73oo2z2y8jm"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/deleteMessageForEveryone/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete Message For Everyone
         * @description Delete Message For Everyone
         */
        delete: operations["deleteMessageForEveryone-98waqzm7i05"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/sendPresence/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send Presence
         * @description Send Presence (typing...)
         */
        post: operations["sendPresence-2b02dbti3up"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/message/updateBlockStatus/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Update block status
         * @description Block status to contacts
         */
        post: operations["updateBlockStatus-svipzmsrqh"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/fetchProfilePictureUrl/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Fetch Profile Picture URL
         * @description Fetch Profile Picture URL
         */
        post: operations["fetchProfilePictureUrl-5139rni3a5c"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/findContacts/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Find Contacts
         * @description Here it is possible to list all contacts or just one,using the 'where' option.
         */
        post: operations["findContacts-sur7ksbazfh"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/getBase64FromMediaMessage/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Get Base64 From Media Message
         * @description Get base64 from media message
         */
        post: operations["getBase64FromMediaMessage-z38d9h2w1e"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/findMessages/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Find Messages
         * @description Find all messages
         */
        post: operations["findMessages-25w4c0hvhtc"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/findStatusMessage/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Find Status Message
         * @description Find status message
         */
        post: operations["findStatusMessage-vs1u669e8s"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/updateMessage/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Update Message
         * @description Update message
         */
        post: operations["updateMessage-fxe9p909tou"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/findChats/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Find Chats
         * @description Find all chats
         */
        post: operations["findChats-xgfscp0j2k"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/fetchBusinessProfile/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Fetch Business Profile
         * @description Fetch business profile from phone number
         */
        post: operations["fetchBusinessProfile-qzloal7gewb"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/fetchProfile/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Fetch Business Profile
         * @description Fetch profile from phone number
         */
        post: operations["fetchBusinessProfile-achzl5peff5"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/updateProfileName/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Update Profile Name
         * @description Update profile name
         */
        post: operations["updateProfileName-ibbf2ojcsrb"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/updateProfileStatus/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Update Profile Status
         * @description Update profile status
         */
        post: operations["updateProfileStatus-r91svwqd1gn"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/updateProfilePicture/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Update Profile Picture
         * @description Update profile picture
         */
        post: operations["updateProfilePicture-bhovzla97ga"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/removeProfilePicture/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Remove Profile Picture
         * @description Update profile picture
         */
        delete: operations["removeProfilePicture-c355vwacvaj"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/fetchPrivacySettings/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch Privacy Settings
         * @description Fetch privacy settings
         */
        get: operations["fetchPrivacySettings-vinaxasd2ph"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chat/updatePrivacySettings/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Update Privacy Settings
         * @description Update privacy settings
         */
        post: operations["updatePrivacySettings-ekygfrksqu8"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group/create/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Group
         * @description Create group
         */
        post: operations["createGroup-wa2ccl41fi"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group/updateGroupPicture/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Update group picture
         * @description Update group picture
         */
        post: operations["undefined-blyhmr6a8kb"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group/updateGroupSubject/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Update Group Subject
         * @description Update group subject
         */
        post: operations["updateGroupSubject-ryzuljdaxf"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group/updateGroupDescription/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Update Group Description
         * @description Update group description
         */
        post: operations["updateGroupDescription-ab65kig5nf"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group/inviteCode/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch Group Invite Code
         * @description Fetch group invite code
         */
        get: operations["fetchInviteCode-l8it3t9y9mi"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group/acceptInviteCode/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch Group Invite Code
         * @description Fetch group invite code
         */
        get: operations["fetchInviteCode-lcxa8qsv4xg"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group/revokeInviteCode/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Fetch Group Invite Code
         * @description Revoke group invite
         */
        post: operations["fetchInviteCode-cris7uicwda"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group/sendInvite/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Send Group Invite
         * @description Send group invite
         */
        post: operations["sendGroupInvite-438pcxhg1s"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group/inviteInfo/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find Group By Invite Code
         * @description Find group by invite code
         */
        get: operations["findGroupByInviteCode-jmxx9edsk29"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group/findGroupInfos/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find Group By Remote JID
         * @description Find group by remote JID
         */
        get: operations["findGroupByJid-5xgvdfqlp7o"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group/fetchAllGroups/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch All Groups
         * @description Fetch all groups
         */
        get: operations["fetchAllGroups-17i74wwv95"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group/participants/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch All Group Members
         * @description Fetch all group members
         */
        get: operations["fetchAllGroupMembers-pj6pmy7xtj"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group/updateParticipant/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Update Group Members
         * @description Update group members
         */
        post: operations["updateParticipant-eblhx7oshe8"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group/updateSetting/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Update Group Settings
         * @description Update group settings
         */
        post: operations["updateSetting-o74sqxp3qd"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group/toggleEphemeral/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Toggle Ephemeral Group Messages
         * @description Toggle temporary messages on group
         */
        post: operations["toggleEphemeral-kh99usvpq5"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group/leaveGroup/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Leave Group
         * @description Leave group
         */
        delete: operations["leaveGroup-twpxvq5us4c"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/typebot/create/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Typebot
         * @description Set typebot
         */
        post: operations["setTypebot-7w3iu4hel05"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/typebot/start/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Start Typebot
         * @description Start typebot
         */
        post: operations["startTypebot-gltl8qz4dhe"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/typebot/changeStatus/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Change Session Status
         * @description Change status session
         */
        post: operations["startTypebot-xjhkmgzbpec"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/typebot/settings/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Change Session Status
         * @description Set settings typebot
         */
        post: operations["startTypebot-a6b2hmnd3i"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/typebot/fetchSettings/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find Typebot
         * @description Find typebot settings
         */
        get: operations["findTypebot-d1q3g9btfb"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/typebot/find/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find Typebot
         * @description Find typebot
         */
        get: operations["findTypebot-u7dllhnhxve"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/typebot/fetch/:typebotId/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find Typebot
         * @description Find typebot
         */
        get: operations["findTypebot-hyqtdh4b60k"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/typebot/fetchSessions/:typebotId/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find session typebot
         * @description Find session typebot
         */
        get: operations["findTypebot-wldr1xu00xa"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/typebot/update/:typebotId/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Change Typebot Status
         * @description Start typebot
         */
        post: operations["changeTypebotStatus-fcw8ddq343"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/typebot/delete/:typebotId/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete Status
         * @description Delete typebot
         */
        delete: operations["changeTypebotStatus-yfc06jfodii"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chatwoot/set/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Set Chatwoot
         * @description Set Chatwoot
         */
        post: operations["setChatwoot-3vn2795wlyf"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/chatwoot/find/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find Chatwoot
         * @description Find Chatwoot
         */
        get: operations["findChatwoot-ymuqjo76con"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sqs/set/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Set SQS
         * @description Set SQS
         */
        post: operations["setSQS-0mj4lnjhan4c"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/sqs/find/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find SQS
         * @description Find SQS
         */
        get: operations["findSQS-3sr64jukpul"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/rabbitmq/set/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Set RabbitMQ
         * @description Set RabbitMQ
         */
        post: operations["setRabbitMQ-rhvdu7u227f"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/rabbitmq/find/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find RabbitMQ
         * @description Find RabbitMQ
         */
        get: operations["findRabbitMQ-o2pqr6zpv1g"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/websocket/set/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Set Websocket
         * @description Set Websocket
         */
        post: operations["setWebsocket-stberz06ugn"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/websocket/find/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find Websocket
         * @description Find Websocket
         */
        get: operations["findWebsocket-ghox733tm09"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/openai/create/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create OpenAI
         * @description Create an OpenAI bot with detailed configuration
         */
        post: operations["createBotOpenAI-xgps8oo8jkl"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/openai/find/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find OpenAI Bots
         * @description Get OpenAI bot with detailed configuration
         */
        get: operations["findBotOpenAI-tx8e6tzxel9"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/openai/find/:openaiBotId/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find OpenAI Bot
         * @description Get OpenAI bot with detailed configuration
         */
        get: operations["findBotOpenAI-j7od5amkvg"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/openai/delete/:openaiBotId/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete OpenAI Bot
         * @description Delete bot OpenAi
         */
        delete: operations["deleteBotOpenAI-b3q9knck8x9"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/openai/update/:openaiBotId/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update OpenAI Bot
         * @description Update OpenAI bot with detailed configuration
         */
        put: operations["updateBotOpenAI-oozpsztvk1"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/openai/creds/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find OpenAI Creds
         * @description Get OpenAI Creds
         */
        get: operations["getBotOpenAICreds-wd6uzm0lxfi"];
        put?: never;
        /**
         * Creds OpenAI Bot
         * @description Creds openia bot configuration
         */
        post: operations["credsBotOpenAI-wxfxg75gl7"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/openai/creds/:openaiCredsId/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete OpenAI Creds
         * @description Delete bot OpenAi
         */
        delete: operations["deleteCredsOpenAI-9dynk1leuuk"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/openai/settings/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Set OpenAI Bot Settings
         * @description Set settings for an OpenAI bot instance.
         */
        post: operations["setOpenAISettings-dnhdw0l2ugb"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/openai/fetchSettings/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find OpenAI Settings
         * @description Find settings OpenAi
         */
        get: operations["findSettingsOpenAI-958uiy6a2w"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/openai/changeStatus/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Change OpenAI Bot Status
         * @description Changes the status of the OpenAI bot instance.
         */
        post: operations["changeOpenAIStatus-m9u25hjdk3a"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/openai/fetchSessions/:openaiBotId/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch sessions of the OpenAI bot instance
         * @description Fetches the sessions of the specified OpenAI bot instance.
         */
        get: operations["fetchSessions-5w3sig8lipa"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dify/create/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create a new Dify bot instance
         * @description Creates a new Dify bot with the provided configuration
         */
        post: operations["createDifyBot-cxnrvnoby"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dify/find/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Fetch Bot Dify
         * @description Fetches dify bots.
         */
        get: operations["fetchDify-mbn12bxfkei"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dify/find/:difyId/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find Bot Dify
         * @description Update dify bot.
         */
        get: operations["findDify-gyt8v0dbfi"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dify/update/:difyId/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Create a new Dify bot instance
         * @description Update bot Dify
         */
        put: operations["updateDifyBot-ntfiyhytib"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dify/settings/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Atualiza as configurações do bot Dify
         * @description Atualiza as configurações do bot Dify.
         */
        post: operations["updateDifySettings-bsia0lmjol"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dify/fetchSettings/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find settings dify bot
         * @description Find settigns dify bot
         */
        get: operations["findDifySettings-wy1twr6w9x"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dify/changeStatus/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Altera o status do bot Dify
         * @description Altera o status de um bot Dify. O status pode ser `opened`, `paused`, ou `closed`. O status `closed` encerra a interação do bot.
         */
        post: operations["changeDifyBotStatus-2q9b4iz3yw2"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/dify/fetchSessions/:difyId/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Recupera as sessões ativas do bot Dify
         * @description Recupera as sessões ativas de um bot Dify específico, com base no ID do bot (`difyId`) e na instância do bot (`instance`).
         */
        get: operations["fetchDifyBotSessions-y51pnsoogxi"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/flowise/create/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Cria uma nova instância do Flowise
         * @description Create Bot Flowise
         */
        post: operations["createFlowiseInstance-d3g7y9ynrh"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/flowise/find/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Recupera as sessões ativas do bot Flowise
         * @description Fetch bots flowise
         */
        get: operations["fetchFlowiseBotSessions-t85527pcwtc"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/flowise/find/:flowiseId/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Recupera as sessões ativas do bot Flowise
         * @description Fetch bots flowise
         */
        get: operations["fetchFlowiseBotSessions-52zuzta5ml6"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/flowise/update/:flowiseId/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Atualiza uma instância do Flowise
         * @description Update flowise bot
         */
        post: operations["updateFlowiseInstance-ledw5flul0i"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/flowise/delete/:flowiseId/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete Bot Flowise
         * @description Delete Bot
         */
        delete: operations["deleteBot-z3yb6ejx2g"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/flowise/settings/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Set as configurações do Flowise
         * @description Set Settings Flowise bot
         */
        post: operations["setlowiseSettings-rg6pn09neyd"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/flowise/fetchSessions/:flowiseId/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Recupera as sessões ativas do bot Flowise
         * @description Fetch session flowise
         */
        get: operations["fetchFlowiseSessions-nbyj9w5x8ik"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/flowise/fetchSettings/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Recupera os configurações do bot flowise
         * @description Fetch settings flowise
         */
        get: operations["fetchFlowiseSettings-blw584v8or"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/flowise/changeStatus/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Atualiza o status de uma instância Flowise
         * @description Atualiza os settings do bot flowise
         */
        post: operations["changeFlowiseStatus-rdyt8jbp3n"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evolutionBot/create/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Evolution Bot
         * @description Create a new Evolution Bot configuration.
         */
        post: operations["createEvolutionBot-1go18jaex06"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evolutionBot/fetch/:evolutionBotId/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find Bot Evo
         * @description Update evo bot.
         */
        get: operations["findEvo-y6rpdp3pfop"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evolutionBot/update/:evolutionBotId/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /**
         * Update Evolution Bot
         * @description Update an existing Evolution Bot configuration.
         */
        put: operations["updateEvolutionBot-nlen3kh2md"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evolutionBot/find/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find Bots Evo
         * @description Update evo bots.
         */
        get: operations["findEvo-ocvm51qtoif"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evolutionBot/delete/:evolutionBotId/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        /**
         * Delete Bot Evolution
         * @description Delete Bot
         */
        delete: operations["deleteBot-jbfdw2wwsbq"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evolutionBot/settings/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Create Evolution Bot Settings
         * @description Configure settings for an Evolution Bot.
         */
        post: operations["createEvolutionBotSettings-u7zvrbqpw6"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evolutionBot/fetchSettings/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find EvoBot
         * @description Find evolution bot settings
         */
        get: operations["findEvolutionBot-yx3tfcxy7a"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evolutionBot/fetchSessions/:evolutionBotId/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Find EvoBot session
         * @description Find evolution bot settings
         */
        get: operations["findEvolutionBot-4bkjvx37m5e"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evolutionBot/changeStatus/{instance}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /**
         * Change Session Status
         * @description Change status session
         */
        post: operations["changeEvobotStatus-qdvqi3mkhhn"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /**
         * Get information about your EvolutionAPI
         * @description Get information about your EvolutionAPI
         */
        get: operations["getEvoInfo-i1an7x4thus"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: never;
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    "createInstance-u210t7gne5d": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": {
                    /** @description instance (Instance name) */
                    instanceName: string;
                    /** @description apikey (Enter or leave empty to create dynamically) */
                    token?: string;
                    /** @description Create QR Code automatically after creation */
                    qrcode?: boolean;
                    /** @description 559999999999 (Instance owner number with Country Code) */
                    number?: string;
                    /**
                     * @description WhatsApp engine
                     * @enum {string}
                     */
                    integration: "WHATSAPP-BAILEYS" | "WHATSAPP-BUSINESS";
                    /** @description Reject WhatsApp calls automatically */
                    rejectCall?: boolean;
                    /** @description Message to be sent when a call is rejected automatically */
                    msgCall?: string;
                    /** @description Ignore group messages */
                    groupsIgnore?: boolean;
                    /** @description Keep WhatsApp always online */
                    alwaysOnline?: boolean;
                    /** @description Send read receipts to received messages */
                    readMessages?: boolean;
                    /** @description Show sent messages read status */
                    readStatus?: boolean;
                    /** @description Syncronize full WhatsApp history with EvolutionAPI */
                    syncFullHistory?: boolean;
                    /** @description proxy host */
                    proxyHost?: string;
                    /** @description proxy port */
                    proxyPort?: string;
                    /** @description proxy protocol */
                    proxyProtocol?: string;
                    /** @description proxy Username */
                    proxyUsername?: string;
                    /** @description proxy password */
                    proxyPassword?: string;
                    /** @description Webhook URL */
                    webhook?: {
                        /** @description The URL of the webhook. */
                        url?: string;
                        /** @description Enable Webhook by events */
                        byEvents?: boolean;
                        /** @description Sends files in base64 when available */
                        base64?: boolean;
                        /** @description Headers for send the API from webhook */
                        headers?: {
                            /** @description Your authorization key header */
                            authorization?: string;
                            /** @description content-type */
                            "Content-Type"?: string;
                        };
                        /** @description Events to be sent to the Webhook */
                        events?: ("APPLICATION_STARTUP" | "QRCODE_UPDATED" | "MESSAGES_SET" | "MESSAGES_UPSERT" | "MESSAGES_UPDATE" | "MESSAGES_DELETE" | "SEND_MESSAGE" | "CONTACTS_SET" | "CONTACTS_UPSERT" | "CONTACTS_UPDATE" | "PRESENCE_UPDATE" | "CHATS_SET" | "CHATS_UPSERT" | "CHATS_UPDATE" | "CHATS_DELETE" | "GROUPS_UPSERT" | "GROUP_UPDATE" | "GROUP_PARTICIPANTS_UPDATE" | "CONNECTION_UPDATE" | "CALL" | "NEW_JWT_TOKEN" | "TYPEBOT_START" | "TYPEBOT_CHANGE_STATUS")[];
                    };
                    rabbitmq?: {
                        /** @description Enable RabbitMQ */
                        enabled?: boolean;
                        /** @description Events to be sent to the RabbitMQ */
                        events?: ("APPLICATION_STARTUP" | "QRCODE_UPDATED" | "MESSAGES_SET" | "MESSAGES_UPSERT" | "MESSAGES_UPDATE" | "MESSAGES_DELETE" | "SEND_MESSAGE" | "CONTACTS_SET" | "CONTACTS_UPSERT" | "CONTACTS_UPDATE" | "PRESENCE_UPDATE" | "CHATS_SET" | "CHATS_UPSERT" | "CHATS_UPDATE" | "CHATS_DELETE" | "GROUPS_UPSERT" | "GROUP_UPDATE" | "GROUP_PARTICIPANTS_UPDATE" | "CONNECTION_UPDATE" | "LABELS_EDIT" | "LABELS_ASSOCIATION" | "CALL" | "TYPEBOT_START" | "TYPEBOT_CHANGE_STATUS")[];
                    };
                    /** @description Enable SQS */
                    sqs?: {
                        /** @description Enable SQS */
                        enabled?: boolean;
                        /** @description Events to be sent to the SQS */
                        events?: ("APPLICATION_STARTUP" | "QRCODE_UPDATED" | "MESSAGES_SET" | "MESSAGES_UPSERT" | "MESSAGES_UPDATE" | "MESSAGES_DELETE" | "SEND_MESSAGE" | "CONTACTS_SET" | "CONTACTS_UPSERT" | "CONTACTS_UPDATE" | "PRESENCE_UPDATE" | "CHATS_SET" | "CHATS_UPSERT" | "CHATS_UPDATE" | "CHATS_DELETE" | "GROUPS_UPSERT" | "GROUP_UPDATE" | "GROUP_PARTICIPANTS_UPDATE" | "CONNECTION_UPDATE" | "CALL" | "NEW_JWT_TOKEN" | "TYPEBOT_START" | "TYPEBOT_CHANGE_STATUS")[];
                    };
                    /** @description Chatwoot account ID */
                    chatwootAccountId?: number;
                    /** @description Chatwoot authentication token */
                    chatwootToken?: string;
                    /** @description Chatwoot server URL */
                    chatwootUrl?: string;
                    /** @description Send message signature on Chatwoot */
                    chatwootSignMsg?: boolean;
                    /** @description Reopen conversation on Chatwoot */
                    chatwootReopenConversation?: boolean;
                    /** @description TODO */
                    chatwootConversationPending?: boolean;
                    /** @description Import Chatwoot contacts */
                    chatwootImportContacts?: boolean;
                    /** @description Name inbox chatwoot */
                    chatwootNameInbox?: string;
                    /** @description TODO */
                    chatwootMergeBrazilContacts?: boolean;
                    /** @description Import chatwoot messages */
                    chatwootImportMessages?: boolean;
                    /** @description Limit message import chatwoot */
                    chatwootDaysLimitImportMessages?: number;
                    /** @description Evolution Bot */
                    chatwootOrganization?: string;
                    /** @description https://evolution-api.com/files/evolution-api-favicon.png */
                    chatwootLogo?: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        instance?: {
                            /** @description The name of the instance */
                            instanceName?: string;
                            /** @description The unique identifier for the instance */
                            instanceId?: string;
                            /** @description The webhook URL for WhatsApp Business integration */
                            webhook_wa_business?: string;
                            /** @description The access token for WhatsApp Business */
                            access_token_wa_business?: string;
                            /** @description The current status of the instance */
                            status?: string;
                        };
                        hash?: {
                            /** @description The API key for authentication */
                            apikey?: string;
                        };
                        settings?: {
                            /** @description Indicates whether calls are rejected */
                            reject_call?: boolean;
                            /** @description Message to be sent when a call is rejected */
                            msg_call?: string;
                            /** @description Indicates whether groups are ignored */
                            groups_ignore?: boolean;
                            /** @description Indicates whether the instance is always online */
                            always_online?: boolean;
                            /** @description Indicates whether messages are marked as read */
                            read_messages?: boolean;
                            /** @description Indicates whether status updates are marked as read */
                            read_status?: boolean;
                            /** @description Indicates whether the full message history is synchronized */
                            sync_full_history?: boolean;
                        };
                    };
                };
            };
            /** @description Forbidden */
            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The HTTP status of the response */
                        status?: number;
                        /** @description The error message indicating the type of error */
                        error?: string;
                        response?: {
                            /** @description List of detailed error messages */
                            message?: string[];
                        };
                    };
                };
            };
        };
    };
    "fetchInstances-benzy24hue5": {
        parameters: {
            query?: {
                /** @description Name of the instance to be fetched */
                instanceName?: string;
                /** @description ID of the instance to be fetched */
                instanceId?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The HTTP status of the response */
                        status?: number;
                        /** @description The error message indicating the type of error */
                        error?: string;
                        response?: {
                            /** @description List of detailed error messages */
                            message?: string[];
                        };
                    };
                };
            };
        };
    };
    "instanceConnect-2ma74b8z1om": {
        parameters: {
            query?: {
                /** @description Phone number (with country code) to be connected */
                number?: string;
            };
            header?: never;
            path: {
                /** @description Name of the instance to connect */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The unique code used for pairing a device or account. */
                        pairingCode?: string;
                        /** @description A specific code associated with the pairing process. This may include tokens or other identifiers. */
                        code?: string;
                        /** @description The count or number of attempts or instances related to the pairing process. */
                        count?: number;
                    };
                };
            };
            /** @description Instance not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The HTTP status of the response */
                        status?: number;
                        /** @description The error message indicating the type of error */
                        error?: string;
                        response?: {
                            /** @description List of detailed error messages */
                            message?: string[];
                        };
                    };
                };
            };
        };
    };
    "restartInstance-mkd6178ob9l": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance to restart */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        instance?: {
                            /** @description The name of the instance. */
                            instanceName?: string;
                            /** @description The state of the instance. */
                            state?: string;
                        };
                    };
                };
            };
            /** @description Instance not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The HTTP status of the response */
                        status?: number;
                        /** @description The error message indicating the type of error */
                        error?: string;
                        response?: {
                            /** @description List of detailed error messages */
                            message?: string[];
                        };
                    };
                };
            };
        };
    };
    "connectionState-zd2w3o1rdbd": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance to get status connect */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        instance?: {
                            /** @description The name of the instance. */
                            instanceName?: string;
                            /** @description The state of the instance. */
                            state?: string;
                        };
                    };
                };
            };
            /** @description Instance not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The HTTP status of the response */
                        status?: number;
                        /** @description The error message indicating the type of error */
                        error?: string;
                        response?: {
                            /** @description List of detailed error messages */
                            message?: string[];
                        };
                    };
                };
            };
        };
    };
    "logoutInstance-h8g511j89pi": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance to logout */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The status of the response. */
                        status?: string;
                        /** @description Indicates whether an error occurred. */
                        error?: boolean;
                        response?: {
                            /** @description A message related to the response. */
                            message?: string;
                        };
                    };
                };
            };
            /** @description Instance not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The HTTP status of the response */
                        status?: number;
                        /** @description The error message indicating the type of error */
                        error?: string;
                        response?: {
                            /** @description List of detailed error messages */
                            message?: string[];
                        };
                    };
                };
            };
        };
    };
    "deleteInstance-ieo63sqkdrl": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance to delete */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The status of the response. */
                        status?: string;
                        /** @description Indicates whether an error occurred. */
                        error?: boolean;
                        response?: {
                            /** @description A message related to the response. */
                            message?: string;
                        };
                    };
                };
            };
            /** @description Instance not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The HTTP status of the response */
                        status?: number;
                        /** @description The error message indicating the type of error */
                        error?: string;
                        response?: {
                            /** @description List of detailed error messages */
                            message?: string[];
                        };
                    };
                };
            };
        };
    };
    "setPresence-g5bqsorbsos": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance to connect */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    presence: "available" | "unavailable";
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Instance not found */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The HTTP status of the response */
                        status?: number;
                        /** @description The error message indicating the type of error */
                        error?: string;
                        response?: {
                            /** @description List of detailed error messages */
                            message?: string[];
                        };
                    };
                };
            };
        };
    };
    "setWebhook-n4c56cbdp8": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description enable webhook to instance */
                    enabled: boolean;
                    /** @description Webhook URL */
                    url: string;
                    /** @description Enables Webhook by events */
                    webhookByEvents: boolean;
                    /** @description Sends files in base64 when available */
                    webhookBase64: boolean;
                    /** @description Events to be sent to the Webhook */
                    events: ("APPLICATION_STARTUP" | "QRCODE_UPDATED" | "MESSAGES_SET" | "MESSAGES_UPSERT" | "MESSAGES_UPDATE" | "MESSAGES_DELETE" | "SEND_MESSAGE" | "CONTACTS_SET" | "CONTACTS_UPSERT" | "CONTACTS_UPDATE" | "PRESENCE_UPDATE" | "CHATS_SET" | "CHATS_UPSERT" | "CHATS_UPDATE" | "CHATS_DELETE" | "GROUPS_UPSERT" | "GROUP_UPDATE" | "GROUP_PARTICIPANTS_UPDATE" | "CONNECTION_UPDATE" | "CALL" | "NEW_JWT_TOKEN" | "TYPEBOT_START" | "TYPEBOT_CHANGE_STATUS")[];
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        webhook?: {
                            /** @description The name of the instance. */
                            instanceName?: string;
                            webhook?: {
                                /** @description The URL of the webhook. */
                                url?: string;
                                /** @description List of events the webhook is subscribed to. */
                                events?: string[];
                                /** @description Indicates whether the webhook is enabled. */
                                enabled?: boolean;
                            };
                        };
                    };
                };
            };
        };
    };
    "findWebhook-gomk9hb8eo4": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Indicates whether the webhook is enabled. */
                        enabled?: boolean;
                        /** @description The URL of the webhook. */
                        url?: string;
                        /** @description List of events the webhook is subscribed to. */
                        events?: string[];
                    };
                };
            };
        };
    };
    "setSettings-g2vdg40qdgw": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Reject calls automatically */
                    rejectCall: boolean;
                    /** @description Message to be sent when a call is rejected automatically */
                    msgCall: string;
                    /** @description Ignore group messages */
                    groupsIgnore: boolean;
                    /** @description Always show WhatsApp online */
                    alwaysOnline: boolean;
                    /** @description Send read receipts */
                    readMessages: boolean;
                    /** @description See message status */
                    readStatus: boolean;
                    /** @description Syncronize full WhatsApp history with EvolutionAPI */
                    syncFullHistory: boolean;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        settings?: {
                            /** @description The name of the instance. */
                            instanceName?: string;
                            settings?: {
                                /** @description Indicates whether to reject incoming calls. */
                                reject_call?: boolean;
                                /** @description Indicates whether to ignore group messages. */
                                groups_ignore?: boolean;
                                /** @description Indicates whether to always keep the instance online. */
                                always_online?: boolean;
                                /** @description Indicates whether to mark messages as read. */
                                read_messages?: boolean;
                                /** @description Indicates whether to read status updates. */
                                read_status?: boolean;
                                /** @description Indicates whether to synchronize full message history. */
                                sync_full_history?: boolean;
                            };
                        };
                    };
                };
            };
        };
    };
    "findWebhook-w4rjjnh1avk": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance to get settings */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Indicates whether to reject incoming calls. */
                        reject_call?: boolean;
                        /** @description Indicates whether to ignore group messages. */
                        groups_ignore?: boolean;
                        /** @description Indicates whether to always keep the instance online. */
                        always_online?: boolean;
                        /** @description Indicates whether to mark messages as read. */
                        read_messages?: boolean;
                        /** @description Indicates whether to read status updates. */
                        read_status?: boolean;
                        /** @description Indicates whether to synchronize full message history. */
                        sync_full_history?: boolean;
                    };
                };
            };
        };
    };
    "sendText-s2v3zraho1": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Number to receive the message (with country code) */
                    number: string;
                    /** @description Test message to send */
                    text: string;
                    /** @description Presence time in milliseconds before sending message */
                    delay?: number;
                    /** @description Shows a preview of the target website if there's a link within the message */
                    linkPreview?: boolean;
                    /** @description Mentioned everyone when the message send */
                    mentionsEveryOne?: boolean;
                    /** @description Numbers to mention */
                    mentioned?: "{{remoteJID}}"[];
                    quoted?: {
                        key?: {
                            /** @description Quoted message ID */
                            id?: string;
                        };
                        message?: {
                            /** @description Quoted message content */
                            conversation?: string;
                        };
                    };
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        key?: {
                            /** @description The remote Jid. */
                            remoteJid?: string;
                            /** @description Indicates whether the message was sent by the user. */
                            fromMe?: boolean;
                            /** @description The ID of the message. */
                            id?: string;
                        };
                        message?: {
                            extendedTextMessage?: {
                                /** @description The text message. */
                                text?: string;
                            };
                        };
                        /** @description The timestamp of the message. */
                        messageTimestamp?: string;
                        /** @description The status of the message. */
                        status?: string;
                    };
                };
            };
        };
    };
    "sendMedia-zw42aj4xbwm": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Number to receive the message (with country code) */
                    number: string;
                    /** @description Image, video or document */
                    mediatype: string;
                    /** @description image/png */
                    mimetype: string;
                    /** @description Teste de caption */
                    caption: string;
                    /** @description Url or base64 */
                    media: string;
                    /** @description Image.png */
                    fileName: string;
                    /** @description Presence time in milliseconds before sending message */
                    delay?: number;
                    /** @description Shows a preview of the target website if there's a link within the message */
                    linkPreview?: boolean;
                    /** @description Mentioned everyone when the message send */
                    mentionsEveryOne?: boolean;
                    /** @description Numbers to mention */
                    mentioned?: "{{remoteJID}}"[];
                    quoted?: {
                        key?: {
                            /** @description Quoted message ID */
                            id?: string;
                        };
                        message?: {
                            /** @description Quoted message content */
                            conversation?: string;
                        };
                    };
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The key of the message, which identifies the message in the chat. */
                        key?: {
                            /** @description The remote Jid. */
                            remoteJid?: string;
                            /** @description Indicates whether the message was sent by the user. */
                            fromMe?: boolean;
                            /** @description The ID of the message. */
                            id?: string;
                        };
                        /** @description The message content, which may include various types of messages like text, images, etc. */
                        message?: {
                            /** @description Details of the image message. */
                            imageMessage?: {
                                /** @description The URL of the image. */
                                url?: string;
                                /** @description The MIME type of the image. */
                                mimetype?: string;
                                /** @description The caption text of the image. */
                                caption?: string;
                                /** @description The SHA-256 hash of the image file. */
                                fileSha256?: string;
                                /** @description The length of the image file. */
                                fileLength?: string;
                                /** @description The height of the image. */
                                height?: number;
                                /** @description The width of the image. */
                                width?: number;
                                /** @description The media key of the image. */
                                mediaKey?: string;
                                /** @description The SHA-256 hash of the encrypted image file. */
                                fileEncSha256?: string;
                                /** @description The direct path to the image. */
                                directPath?: string;
                                /** @description The timestamp of the media key. */
                                mediaKeyTimestamp?: string;
                                /** @description The JPEG thumbnail of the image. */
                                jpegThumbnail?: string;
                                /** @description Additional context information. */
                                contextInfo?: Record<string, never>;
                            };
                        };
                        /** @description The timestamp of the message, represented as a string. */
                        messageTimestamp?: string;
                        /** @description The status of the message, such as sent, received, or pending. */
                        status?: string;
                    };
                };
            };
        };
    };
    "sendWhatsAppAudio-r4jwy1c4yfr": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the instance to connect */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Number to receive the message (with country code) */
                    number: string;
                    /** @description url or base64  */
                    audio: string;
                    /** @description Presence time in milliseconds before sending message */
                    delay?: number;
                    /** @description Shows a preview of the target website if there's a link within the message */
                    linkPreview?: boolean;
                    /** @description Mentioned everyone when the message send */
                    mentionsEveryOne?: boolean;
                    /** @description Numbers to mention */
                    mentioned?: "{{remoteJID}}"[];
                    quoted?: {
                        key?: {
                            /** @description Quoted message ID */
                            id?: string;
                        };
                        message?: {
                            /** @description Quoted message content */
                            conversation?: string;
                        };
                    };
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The key of the message, which identifies the message in the chat. */
                        key?: {
                            /** @description The remote Jid. */
                            remoteJid?: string;
                            /** @description Indicates whether the message was sent by the user. */
                            fromMe?: boolean;
                            /** @description The ID of the message. */
                            id?: string;
                        };
                        /** @description The message content, which may include various types of messages like text, images, audio, etc. */
                        message?: {
                            /** @description Details of the audio message. */
                            audioMessage?: {
                                /** @description The URL of the audio message. */
                                url?: string;
                                /** @description The MIME type of the audio message. */
                                mimetype?: string;
                                /** @description The SHA-256 hash of the audio file. */
                                fileSha256?: string;
                                /** @description The length of the audio file. */
                                fileLength?: string;
                                /** @description The duration of the audio message in seconds. */
                                seconds?: number;
                                /** @description Indicates whether the audio message is a push-to-talk (PTT) message. */
                                ptt?: boolean;
                                /** @description The media key of the audio message. */
                                mediaKey?: string;
                                /** @description The SHA-256 hash of the encrypted audio file. */
                                fileEncSha256?: string;
                                /** @description The direct path to the audio file. */
                                directPath?: string;
                                /** @description The timestamp of the media key. */
                                mediaKeyTimestamp?: string;
                            };
                        };
                        /** @description The timestamp of the message, represented as a string. */
                        messageTimestamp?: string;
                        /** @description The status of the message, such as sent, received, or pending. */
                        status?: string;
                    };
                };
            };
        };
    };
    "sendSticker-8or31ftwses": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Number to receive the message (with country code) */
                    number: string;
                    /** @description Url or base64  */
                    sticker: string;
                    /** @description Presence time in milliseconds before sending message */
                    delay?: number;
                    /** @description Shows a preview of the target website if there's a link within the message */
                    linkPreview?: boolean;
                    /** @description Mentioned everyone when the message send */
                    mentionsEveryOne?: boolean;
                    /** @description Numbers to mention */
                    mentioned?: "{{remoteJID}}"[];
                    quoted?: {
                        key?: {
                            /** @description Quoted message ID */
                            id?: string;
                        };
                        message?: {
                            /** @description Quoted message content */
                            conversation?: string;
                        };
                    };
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "sendStatus-1dip7warejm": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance  */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description status type
                     * @enum {string}
                     */
                    type: "text" | "image" | "audio";
                    /** @description status type */
                    content: string;
                    /** @description Optional for image or video */
                    caption: string;
                    /** @description Exemple #008000 */
                    backgroundColor: string;
                    /** @description 1 = SERIF 2 = NORICAN_REGULAR 3 = BRYNDAN_WRITE 4 = BEBASNEUE_REGULAR 5 = OSWALD_HEAVY  */
                    font: number;
                    /** @description true to send to all contacts or false to send to statusJidList below  */
                    allContacts: boolean;
                    /** @description Numbers to send status */
                    statusJidList: "{{remoteJID}}"[];
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The key of the message, which identifies the message in the chat. */
                        key?: {
                            /** @description The remote Jid. */
                            remoteJid?: string;
                            /** @description Indicates whether the message was sent by the user. */
                            fromMe?: boolean;
                            /** @description The ID of the message. */
                            id?: string;
                        };
                        /** @description The message content, which may include various types of messages like text, images, etc. */
                        message?: {
                            /** @description Details of the extended text message. */
                            extendedTextMessage?: {
                                /** @description The text content of the message. */
                                text?: string;
                                /** @description The background color of the text message, represented as ARGB integer value. */
                                backgroundArgb?: number;
                                /** @description The font used in the text message. */
                                font?: string;
                            };
                        };
                        /** @description The timestamp of the message, represented as a string. */
                        messageTimestamp?: string;
                        /** @description The status of the message, such as sent, received, or pending. */
                        status?: string;
                        /** @description The participant in the chat to whom the message was sent. */
                        participant?: string;
                    };
                };
            };
        };
    };
    "sendLocation-9i07zlhqyni": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Number to receive the message (with country code) */
                    number: string;
                    /** @description Name the city */
                    name: string;
                    /** @description Location address */
                    address: string;
                    /** @description Latitude location */
                    latitude: number;
                    /** @description Longitude location */
                    longitude: number;
                    /** @description Presence time in milliseconds before sending message */
                    delay?: number;
                    /** @description Shows a preview of the target website if there's a link within the message */
                    linkPreview?: boolean;
                    /** @description Mentioned everyone when the message send */
                    mentionsEveryOne?: boolean;
                    /** @description Numbers to mention */
                    mentioned?: "{{remoteJID}}"[];
                    quoted?: {
                        key?: {
                            /** @description Quoted message ID */
                            id?: string;
                        };
                        message?: {
                            /** @description Quoted message content */
                            conversation?: string;
                        };
                    };
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The key of the message, which identifies the message in the chat. */
                        key?: {
                            /** @description The remote Jid. */
                            remoteJid?: string;
                            /** @description Indicates whether the message was sent by the user. */
                            fromMe?: boolean;
                            /** @description The ID of the message. */
                            id?: string;
                        };
                        /** @description The message content, which may include various types of messages like text, images, location, etc. */
                        message?: {
                            /** @description Details of the location message. */
                            locationMessage?: {
                                /**
                                 * Format: float
                                 * @description The latitude of the location.
                                 */
                                degreesLatitude?: number;
                                /**
                                 * Format: float
                                 * @description The longitude of the location.
                                 */
                                degreesLongitude?: number;
                                /** @description The name of the location. */
                                name?: string;
                                /** @description The address of the location. */
                                address?: string;
                                /** @description Additional context information. */
                                contextInfo?: Record<string, never>;
                            };
                        };
                        /** @description The timestamp of the message, represented as a string. */
                        messageTimestamp?: string;
                        /** @description The status of the message, such as sent, received, or pending. */
                        status?: string;
                    };
                };
            };
        };
    };
    "sendContact-xt1kjcfnxtf": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Number to receive the message (with country code) */
                    number: string;
                    contact: {
                        /** @description Contact full name */
                        fullName?: string;
                        /** @description Phone number non-stylized with country code (553198296801) */
                        wuid: string;
                        /** @description Phone number stylized (+55 31 9 9999-9999) */
                        phoneNumber: string;
                        /** @description Organization name for the contact */
                        organization: string;
                        /** @description Contact email address */
                        email: string;
                        /** @description Page URL */
                        url: string;
                    }[];
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The key of the message, which identifies the message in the chat. */
                        key?: {
                            /** @description The remote Jid. */
                            remoteJid?: string;
                            /** @description Indicates whether the message was sent by the user. */
                            fromMe?: boolean;
                            /** @description The ID of the message. */
                            id?: string;
                        };
                        /** @description The message content, which may include various types of messages like text, images, contact, etc. */
                        message?: {
                            /** @description Details of the contact message. */
                            contactMessage?: {
                                /** @description The display name of the contact. */
                                displayName?: string;
                                /** @description The vCard format contact information. */
                                vcard?: string;
                                /** @description Additional context information. */
                                contextInfo?: Record<string, never>;
                            };
                        };
                        /** @description The timestamp of the message, represented as a string. */
                        messageTimestamp?: string;
                        /** @description The status of the message, such as sent, received, or pending. */
                        status?: string;
                    };
                };
            };
        };
    };
    "sendReaction-f2sfrzo2dbb": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    key?: {
                        /** @description Chat contact or group remote JID */
                        remoteJid?: string;
                        /** @description If the message was sent by the instance owner or not */
                        fromMe?: boolean;
                        /** @description Message ID */
                        id?: string;
                    };
                    /**
                     * @description Reaction emoji
                     * @example 🚀
                     */
                    reaction?: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The key of the message, which identifies the message in the chat. */
                        key?: {
                            /** @description The remote Jid. */
                            remoteJid?: string;
                            /** @description Indicates whether the message was sent by the user. */
                            fromMe?: boolean;
                            /** @description The ID of the message. */
                            id?: string;
                        };
                        /** @description The message content, which may include various types of messages like text, images, reaction, etc. */
                        message?: {
                            /** @description Details of the reaction message. */
                            reactionMessage?: {
                                /** @description The key of the original message to which the reaction is linked. */
                                key?: {
                                    /** @description The remote Jid of the original message. */
                                    remoteJid?: string;
                                    /** @description Indicates whether the original message was sent by the user. */
                                    fromMe?: boolean;
                                    /** @description The ID of the original message. */
                                    id?: string;
                                };
                                /** @description The reaction text or emoji. */
                                text?: string;
                                /** @description The timestamp when the reaction was sent, in milliseconds. */
                                senderTimestampMs?: string;
                            };
                        };
                        /** @description The timestamp of the message, represented as a string. */
                        messageTimestamp?: string;
                        /** @description The status of the message, such as sent, received, or pending. */
                        status?: string;
                    };
                };
            };
        };
    };
    "sendPoll-qer1iikdxib": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description {{remoteJid}} */
                    number: string;
                    /** @description Main text of the poll */
                    name: string;
                    /** @description Ex: 1 */
                    selectableCount: number;
                    /** @description Values for question */
                    values: ("Question 1" | "Question 2" | "Question 3")[];
                    /** @description Presence time in milliseconds before sending message */
                    delay?: number;
                    /** @description Shows a preview of the target website if there's a link within the message */
                    linkPreview?: boolean;
                    /** @description Mentioned everyone when the message send */
                    mentionsEveryOne?: boolean;
                    /** @description Numbers to mention */
                    mentioned?: "{{remoteJID}}"[];
                    quoted?: {
                        key?: {
                            /** @description Quoted message ID */
                            id?: string;
                        };
                        message?: {
                            /** @description Quoted message content */
                            conversation?: string;
                        };
                    };
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The key of the message, which identifies the message in the chat. */
                        key?: {
                            /** @description The remote Jid. */
                            remoteJid?: string;
                            /** @description Indicates whether the message was sent by the user. */
                            fromMe?: boolean;
                            /** @description The ID of the message. */
                            id?: string;
                        };
                        /** @description The message content, which may include various types of messages like text, images, poll creation, etc. */
                        message?: {
                            /** @description Information about the context of the message. */
                            messageContextInfo?: {
                                /** @description The secret of the message context. */
                                messageSecret?: string;
                            };
                            /** @description Details of the poll creation message. */
                            pollCreationMessage?: {
                                /** @description The name of the poll. */
                                name?: string;
                                /** @description The options available in the poll. */
                                options?: {
                                    /** @description The name of the poll option. */
                                    optionName?: string;
                                }[];
                                /** @description The number of options that can be selected in the poll. */
                                selectableOptionsCount?: number;
                            };
                        };
                        /** @description The timestamp of the message, represented as a string. */
                        messageTimestamp?: string;
                        /** @description The status of the message, such as sent, received, or pending. */
                        status?: string;
                    };
                };
            };
        };
    };
    "sendList-x8j9s0go4y8": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description {{remoteJid}} */
                    number: string;
                    /** @description Title of list */
                    title: string;
                    /** @description Description for lists */
                    description: string;
                    /** @description Text Button */
                    buttonText: string;
                    /** @description footer list
                     *     https://examplelink.com.br */
                    footerText: string;
                    values: {
                        /** @description title item of list */
                        title?: string;
                        rows?: {
                            /** @description Title of row */
                            title?: string;
                            /** @description Description of row */
                            description?: string;
                            /** @description Id of row */
                            rowId?: string;
                        }[];
                    }[];
                    /** @description Presence time in milliseconds before sending message */
                    delay?: number;
                    /** @description Shows a preview of the target website if there's a link within the message */
                    linkPreview?: boolean;
                    /** @description Mentioned everyone when the message send */
                    mentionsEveryOne?: boolean;
                    /** @description Numbers to mention */
                    mentioned?: "{{remoteJID}}"[];
                    quoted?: {
                        key?: {
                            /** @description Quoted message ID */
                            id?: string;
                        };
                        message?: {
                            /** @description Quoted message content */
                            conversation?: string;
                        };
                    };
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The key of the message, which identifies the message in the chat. */
                        key?: {
                            /** @description The remote Jid. */
                            remoteJid?: string;
                            /** @description Indicates whether the message was sent by the user. */
                            fromMe?: boolean;
                            /** @description The ID of the message. */
                            id?: string;
                        };
                        /** @description The message content, which may include various types of messages like text, images, poll creation, etc. */
                        message?: {
                            /** @description Information about the context of the message. */
                            messageContextInfo?: {
                                /** @description The secret of the message context. */
                                messageSecret?: string;
                            };
                            /** @description Details of the poll creation message. */
                            pollCreationMessage?: {
                                /** @description The name of the poll. */
                                name?: string;
                                /** @description The options available in the poll. */
                                options?: {
                                    /** @description The name of the poll option. */
                                    optionName?: string;
                                }[];
                                /** @description The number of options that can be selected in the poll. */
                                selectableOptionsCount?: number;
                            };
                        };
                        /** @description The timestamp of the message, represented as a string. */
                        messageTimestamp?: string;
                        /** @description The status of the message, such as sent, received, or pending. */
                        status?: string;
                    };
                };
            };
        };
    };
    "sendList-2wjgnyn91nf": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description {{remoteJid}} */
                    number: string;
                    /** @description Title Button */
                    title: string;
                    /** @description Description for buttons */
                    description: string;
                    /** @description Text Button */
                    footer: string;
                    buttons: {
                        /** @description Types: reply,url,call */
                        title?: string;
                        /** @description Text of button */
                        displayText?: string;
                        /** @description Id button */
                        id?: string;
                    }[];
                    /** @description Presence time in milliseconds before sending message */
                    delay?: number;
                    /** @description Shows a preview of the target website if there's a link within the message */
                    linkPreview?: boolean;
                    /** @description Mentioned everyone when the message send */
                    mentionsEveryOne?: boolean;
                    /** @description Numbers to mention */
                    mentioned?: "{{remoteJID}}"[];
                    quoted?: {
                        key?: {
                            /** @description Quoted message ID */
                            id?: string;
                        };
                        message?: {
                            /** @description Quoted message content */
                            conversation?: string;
                        };
                    };
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The key of the message, which identifies the message in the chat. */
                        key?: {
                            /** @description The remote Jid. */
                            remoteJid?: string;
                            /** @description Indicates whether the message was sent by the user. */
                            fromMe?: boolean;
                            /** @description The ID of the message. */
                            id?: string;
                        };
                        /** @description The message content, which may include various types of messages like text, images, poll creation, etc. */
                        message?: {
                            /** @description Information about the context of the message. */
                            messageContextInfo?: {
                                /** @description The secret of the message context. */
                                messageSecret?: string;
                            };
                            /** @description Details of the poll creation message. */
                            pollCreationMessage?: {
                                /** @description The name of the poll. */
                                name?: string;
                                /** @description The options available in the poll. */
                                options?: {
                                    /** @description The name of the poll option. */
                                    optionName?: string;
                                }[];
                                /** @description The number of options that can be selected in the poll. */
                                selectableOptionsCount?: number;
                            };
                        };
                        /** @description The timestamp of the message, represented as a string. */
                        messageTimestamp?: string;
                        /** @description The status of the message, such as sent, received, or pending. */
                        status?: string;
                    };
                };
            };
        };
    };
    "whatsappNumbers-g319xq8bgpm": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Phone numbers (with country code) to be checked */
                    numbers?: string[];
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Indicates whether the WhatsApp account exists. */
                        exists?: boolean;
                        /** @description The JID of the WhatsApp account. */
                        jid?: string;
                        /** @description The phone number associated with the WhatsApp account. */
                        number?: string;
                    }[];
                };
            };
        };
    };
    "markMessageAsRead-knx97o8q6qp": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Messages to be mark as read */
                    readMessages: {
                        /** @description Chat contact or group remote JID */
                        remoteJid?: string;
                        /** @description If the message was sent by the instance owner or the contact */
                        fromMe?: boolean;
                        /** @description Message ID */
                        id?: string;
                    }[];
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description A brief message describing the action performed. */
                        message?: string;
                        /** @description The status of the read action. */
                        read?: string;
                    };
                };
            };
        };
    };
    "markMessageAsRead-s36hvqehrr": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Messages to be mark as unread */
                    lastMessage: {
                        /** @description Chat contact or group remote JID */
                        remoteJid?: string;
                        /** @description If the message was sent by the instance owner or the contact */
                        fromMe?: boolean;
                        /** @description Message ID */
                        id?: string;
                    }[];
                    /** @description remoteJid here */
                    chat: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description A brief message describing the action performed. */
                        message?: string;
                        /** @description The status of the read action. */
                        read?: string;
                    };
                };
            };
        };
    };
    "archiveChat-73oo2z2y8jm": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Messages to be mark as read */
                    lastMessage: {
                        key: {
                            /** @description Chat contact or group remote JID */
                            remoteJid: string;
                            /** @description If the message was sent by the instance owner or the contact */
                            fromMe: boolean;
                            /** @description Message ID */
                            id: string;
                        };
                    };
                    /** @description Whether to archive the chat or not */
                    archive: boolean;
                    /** @description remoteJid here */
                    chat: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The ID of the chat. */
                        chatId?: string;
                        /** @description Indicates whether the chat is archived. */
                        archived?: boolean;
                    };
                };
            };
        };
    };
    "deleteMessageForEveryone-98waqzm7i05": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Message ID */
                    id: string;
                    /** @description Chat contact or group remote JID */
                    remoteJid: string;
                    /** @description If the message was sent by the instance owner or the contact */
                    fromMe: boolean;
                    /** @description Participant for group messages only TODO */
                    participant?: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The key that identifies the message in the chat. */
                        key?: {
                            /** @description The remote JID (Jabber ID) of the WhatsApp account. */
                            remoteJid?: string;
                            /** @description Indicates whether the message was sent by the user. */
                            fromMe?: boolean;
                            /** @description The ID of the message. */
                            id?: string;
                        };
                        /** @description The content of the message. */
                        message?: {
                            /** @description Details of the protocol message. */
                            protocolMessage?: {
                                /** @description The key that identifies the referenced message. */
                                key?: {
                                    /** @description The remote JID (Jabber ID) of the WhatsApp account in the referenced message. */
                                    remoteJid?: string;
                                    /** @description Indicates whether the referenced message was sent by the user. */
                                    fromMe?: boolean;
                                    /** @description The ID of the referenced message. */
                                    id?: string;
                                };
                                /** @description The type of protocol message, e.g., 'REVOKE'. */
                                type?: string;
                            };
                        };
                        /** @description The timestamp of the message, represented as a string. */
                        messageTimestamp?: string;
                        /** @description The status of the message, such as sent, received, or pending. */
                        status?: string;
                    };
                };
            };
        };
    };
    "sendPresence-2b02dbti3up": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Receiver phone number with country code */
                    number: string;
                    options: {
                        /** @description Presence display time in milliseconds */
                        delay: number;
                        /**
                         * @description Presence type
                         * @enum {string}
                         */
                        presence: "composing" | "recording";
                        /** @description Number contact */
                        number: string;
                    };
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "updateBlockStatus-svipzmsrqh": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description  Phone number with country code */
                    number: string;
                    /** @description Values: block, unblock  */
                    status: string;
                };
            };
        };
        responses: {
            /** @description Created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "fetchProfilePictureUrl-5139rni3a5c": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Number to fetch profile picture URL: {{remoteJid}} */
                    number: string;
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The WhatsApp User ID (WUID). */
                        wuid?: string;
                        /** @description URL of the user's profile picture. */
                        profilePictureUrl?: string;
                    };
                };
            };
        };
    };
    "findContacts-sur7ksbazfh": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    where: {
                        /** @description Contact number: optional */
                        id?: string;
                    };
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "getBase64FromMediaMessage-z38d9h2w1e": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    message: {
                        key?: {
                            /** @description Message ID */
                            id?: string;
                        };
                    };
                    /** @description Convert video to MP4, for video only */
                    convertToMp4: boolean;
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "findMessages-25w4c0hvhtc": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    where?: {
                        key?: {
                            /** @description Contact or group remote JID */
                            remoteJid?: string;
                        };
                    };
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "findStatusMessage-vs1u669e8s": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    where: {
                        /** @description MongoDB message ID */
                        _id?: string;
                        /** @description Message ID (from WhatsApp) */
                        id?: string;
                        /** @description Contact or group remote JID */
                        remoteJid?: string;
                        /** @description Whether the message is from the instance owner or not */
                        fromMe?: boolean;
                    };
                    /** @description Limit for the return */
                    limit?: number;
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "updateMessage-fxe9p909tou": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Receiver phone number with country code */
                    number: number;
                    /** @description New message content */
                    text: string;
                    key: {
                        /** @description Chat contact or group remote JID */
                        remoteJid?: string;
                        /** @description If the message was sent by the instance owner or not */
                        fromMe?: boolean;
                        /** @description Message ID */
                        id?: string;
                    };
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "findChats-xgfscp0j2k": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "fetchBusinessProfile-qzloal7gewb": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Phone number with country code */
                    number: string;
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "fetchBusinessProfile-achzl5peff5": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Phone number with country code */
                    number: string;
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "updateProfileName-ibbf2ojcsrb": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description New name for profile */
                    name: string;
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "updateProfileStatus-r91svwqd1gn": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description New status for profile */
                    status: string;
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "updateProfilePicture-bhovzla97ga": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description New spicture URL */
                    picture: string;
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "removeProfilePicture-c355vwacvaj": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "fetchPrivacySettings-vinaxasd2ph": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance  */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "updatePrivacySettings-ekygfrksqu8": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance  */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    readreceipts: "all" | "none";
                    /** @enum {string} */
                    profile: "all" | "contacts" | "contact_blacklist" | "none";
                    /** @enum {string} */
                    status: "all" | "contacts" | "contact_blacklist" | "none";
                    /** @enum {string} */
                    online: "all" | "match_last_seen";
                    /** @enum {string} */
                    last: "all" | "contacts" | "contact_blacklist" | "none";
                    /** @enum {string} */
                    groupadd: "all" | "contacts" | "contact_blacklist";
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "createGroup-wa2ccl41fi": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance  */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Group subject */
                    subject: Record<string, never>;
                    /** @description Group description */
                    description: string;
                    /** @description Group members phone numbers with country code */
                    participants: string[];
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "undefined-blyhmr6a8kb": {
        parameters: {
            query: {
                /** @description Group remote JID */
                groupJid: string;
            };
            header?: never;
            path: {
                /** @description Name of the instance  */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description New profile picture image URL */
                    image: string;
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "updateGroupSubject-ryzuljdaxf": {
        parameters: {
            query: {
                /** @description Group remote JID */
                groupJid: string;
            };
            header?: never;
            path: {
                /** @description Name of the instance  */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description New group subject */
                    subject: string;
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "updateGroupDescription-ab65kig5nf": {
        parameters: {
            query: {
                /** @description Group remote JID */
                groupJid: string;
            };
            header?: never;
            path: {
                /** @description Name of the instance  */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description New group description */
                    description: string;
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "fetchInviteCode-l8it3t9y9mi": {
        parameters: {
            query: {
                /** @description Group remote JID */
                groupJid: string;
            };
            header?: never;
            path: {
                /** @description Name of the instance  */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The URL for the WhatsApp group invite. */
                        inviteUrl?: string;
                        /** @description The code for the WhatsApp group invite. */
                        inviteCode?: string;
                    };
                };
            };
        };
    };
    "fetchInviteCode-lcxa8qsv4xg": {
        parameters: {
            query: {
                /** @description Group invite code */
                inviteCode: string;
            };
            header?: never;
            path: {
                /** @description ID of the instance to connect */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "fetchInviteCode-cris7uicwda": {
        parameters: {
            query: {
                /** @description Group remote JID */
                groupJid: string;
            };
            header?: never;
            path: {
                /** @description Name of the instance  */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "sendGroupInvite-438pcxhg1s": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance  */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Group remote JID */
                    groupJid: string;
                    /** @description Description to send with the invitation */
                    description: string;
                    /** @description Numbers to receive the invitation */
                    numbers: string[];
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Indicates if the invite was sent successfully. */
                        send?: boolean;
                        /** @description The URL for the WhatsApp group invite. */
                        inviteUrl?: string;
                    };
                };
            };
        };
    };
    "findGroupByInviteCode-jmxx9edsk29": {
        parameters: {
            query?: {
                /** @description Group invite code */
                inviteCode?: string;
            };
            header?: never;
            path: {
                /** @description Name of the instance  */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "findGroupByJid-5xgvdfqlp7o": {
        parameters: {
            query: {
                /** @description Group remote JID */
                groupJid: string;
            };
            header?: never;
            path: {
                /** @description Name of the instance  */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The ID of the group. */
                        id?: string;
                        /** @description The subject (name) of the group. */
                        subject?: string;
                        /** @description The ID of the user who set the subject. */
                        subjectOwner?: string;
                        /** @description The timestamp when the subject was set. */
                        subjectTime?: number;
                        /** @description URL of the group's profile picture. */
                        pictureUrl?: string;
                        /** @description The number of participants in the group. */
                        size?: number;
                        /** @description The timestamp when the group was created. */
                        creation?: number;
                        /** @description The ID of the group owner. */
                        owner?: string;
                        /** @description The description of the group. */
                        desc?: string;
                        /** @description The ID of the description message. */
                        descId?: string;
                        /** @description Indicates if the group is restricted (only admins can send messages). */
                        restrict?: boolean;
                        /** @description Indicates if the group is an announcement group (only admins can send messages). */
                        announce?: boolean;
                        /** @description List of participants in the group. */
                        participants?: {
                            /** @description The ID of the participant. */
                            id?: string;
                            /** @description The role of the participant (e.g., 'admin', 'superadmin'). */
                            admin?: string;
                        }[];
                    };
                };
            };
        };
    };
    "fetchAllGroups-17i74wwv95": {
        parameters: {
            query: {
                /** @description Whether to get the group members or not */
                getParticipants: boolean;
            };
            header?: never;
            path: {
                /** @description Name of the instance  */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The ID of the group. */
                        id: string;
                        /** @description The subject (name) of the group. */
                        subject: string;
                        /** @description The ID of the user who set the subject. */
                        subjectOwner: string;
                        /** @description The timestamp when the subject was set. */
                        subjectTime: number;
                        /** @description URL of the group's profile picture. */
                        pictureUrl?: string;
                        /** @description The number of participants in the group. */
                        size: number;
                        /** @description The timestamp when the group was created. */
                        creation: number;
                        /** @description The ID of the group owner. */
                        owner: string;
                        /** @description The description of the group. */
                        desc?: string;
                        /** @description The ID of the description message. */
                        descId?: string;
                        /** @description Indicates if the group is restricted (only admins can send messages). */
                        restrict: boolean;
                        /** @description Indicates if the group is an announcement group (only admins can send messages). */
                        announce: boolean;
                    }[];
                };
            };
        };
    };
    "fetchAllGroupMembers-pj6pmy7xtj": {
        parameters: {
            query: {
                /** @description Group remote JID */
                groupJid: string;
            };
            header?: never;
            path: {
                /** @description Name of the instance  */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description List of participants in the group. */
                        participants?: {
                            /** @description The ID of the participant. */
                            id: string;
                            /** @description The role of the participant (e.g., 'admin', 'superadmin'). */
                            admin?: string;
                        }[];
                    };
                };
            };
        };
    };
    "updateParticipant-eblhx7oshe8": {
        parameters: {
            query: {
                /** @description Group remote JID */
                groupJid: string;
            };
            header?: never;
            path: {
                /** @description Name of the instance  */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @enum {string} */
                    action?: "add" | "remove" | "promote" | "demote";
                    /** @description Group members phone numbers with country code */
                    participants?: string[];
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "updateSetting-o74sqxp3qd": {
        parameters: {
            query: {
                /** @description Group remote JID */
                groupJid: string;
            };
            header?: never;
            path: {
                /** @description Name of the instance  */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description Group setting (`announcement` = only admins can send messages; `not_announcement` = everyone can send messages; `locked` = only admins can edit group settings; `unlocked` = everyone can edit group settings
                     * @enum {string}
                     */
                    action?: "announcement" | "not_announcement" | "locked" | "unlocked";
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "toggleEphemeral-kh99usvpq5": {
        parameters: {
            query: {
                /** @description Group remote JID */
                groupJid: string;
            };
            header?: never;
            path: {
                /** @description Name of the instance  */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Time to expire message (in seconds) */
                    expiration: number;
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "leaveGroup-twpxvq5us4c": {
        parameters: {
            query: {
                /** @description Group remote JID */
                groupJid: string;
            };
            header?: never;
            path: {
                /** @description Name of the instance  */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "setTypebot-7w3iu4hel05": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    enabled: boolean;
                    /** @description Typebot URL */
                    url: string;
                    /** @description Typebot name */
                    typebot: string;
                    /** @description All or keyword */
                    triggerType: string;
                    /** @description Operator logic, ex: contains, equals, startsWith, endsWith, regex */
                    triggerOperator: string;
                    /** @description All or keyword */
                    triggerValue: string;
                    /** @description Time to expire session */
                    expire: number;
                    /** @description Keyword to finish session */
                    keywordFinish: string;
                    /** @description Delay when the bot send message */
                    delayMessage: number;
                    /** @description Unrecognized message */
                    unknownMessage: string;
                    /** @description Marked as viewed */
                    listeningFromMe: boolean;
                    /** @description Stop bot when I send message */
                    stopBotFromMe: boolean;
                    /** @description Keep session open */
                    keepOpen: boolean;
                    /** @description Start typebot for your own messages */
                    debounceTime: number;
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "startTypebot-gltl8qz4dhe": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Typebot URL */
                    url?: string;
                    /** @description Typebot name */
                    typebot?: string;
                    /** @description Receiver remote JID */
                    remoteJid?: string;
                    /** @description Start a new session */
                    startSession?: boolean;
                    variables?: {
                        /** @description Variable name */
                        name?: string;
                        /** @description Variable value */
                        value?: string;
                    }[];
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "startTypebot-xjhkmgzbpec": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description {{remoteJid}} */
                    remoteJid?: string;
                    /** @description Typebot status, types: opened, paused, closed */
                    status?: string;
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "startTypebot-a6b2hmnd3i": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Time to expire session bot */
                    expire: string;
                    /** @description Keyword to finished session */
                    keywordFinish: string;
                    /** @description Delay when the bot send message */
                    delayMessage: string;
                    /** @description Unrecognized message */
                    unknownMessage: string;
                    listeningFromMe: string;
                    /** @description Stop bot when I send message */
                    stopBotFromMe: string;
                    /** @description Keep session open */
                    keepOpen: string;
                    /** @description Time  */
                    debounceTime: string;
                    /** @description Jids ignore from bot */
                    ignoreJids: string;
                    /** @description Id fallback */
                    typebotIdFallback: string;
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "findTypebot-d1q3g9btfb": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "findTypebot-u7dllhnhxve": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "findTypebot-hyqtdh4b60k": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
                /** @description ID of the typebot */
                typebotId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "findTypebot-wldr1xu00xa": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
                /** @description ID of the typebot */
                typebotId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "changeTypebotStatus-fcw8ddq343": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
                /** @description ID of the typebot */
                typebotId: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Enable typebot */
                    enabled: boolean;
                    /** @description Url of typebot */
                    url: string;
                    /** @description Nmae typebot */
                    typebot: string;
                    /** @description Time to expire session */
                    expire: number;
                    /** @description Keyword to finished session */
                    keywordFinish: string;
                    /** @description Delay when the bot send message */
                    delayMessage: number;
                    /** @description Unrecognized message */
                    unknownMessage: string;
                    /** @description Listening message for me */
                    listeningFromMe: boolean;
                    /** @description Stop bot when I send message */
                    stopBotFromMe: boolean;
                    /** @description Keep session open */
                    keepOpen: boolean;
                    /** @description The timestamp of the message. */
                    debounceTime: number;
                    /** @description All or keyword */
                    triggerType: string;
                    /** @description Operator logic, ex: contains, equals, startsWith, endsWith, regex */
                    triggerOperator: string;
                    /** @description Ex: evolution */
                    triggerValue: string;
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "changeTypebotStatus-yfc06jfodii": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
                /** @description ID of the typebot */
                typebotId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "setChatwoot-3vn2795wlyf": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Enable chatwoot */
                    enabled: boolean;
                    /** @description Chatwoot account ID */
                    accountId: string;
                    /** @description Chatwoot token */
                    token: string;
                    /** @description Chatwoot server URL */
                    url: string;
                    /** @description Sign message with user name */
                    signMsg: boolean;
                    reopenConversation: boolean;
                    conversationPending: boolean;
                    /** @description Name inbox chatwoot */
                    nameInbox: string;
                    mergeBrazilContacts: boolean;
                    /** @description Import Chatwoot contacts */
                    importContacts: boolean;
                    /** @description Import chatwoot messages */
                    importMessages: boolean;
                    daysLimitImportMessages: number;
                    /** @description Break line */
                    signDelimiter: string;
                    autoCreate: boolean;
                    /** @description Name organization */
                    organization: string;
                    /** @description Url logo */
                    logo: string;
                    ignoreJids: string[];
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "findChatwoot-ymuqjo76con": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "setSQS-0mj4lnjhan4c": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    sqs: {
                        enabled?: boolean;
                        /** @description Events to be sent to the Webhook */
                        events?: ("APPLICATION_STARTUP" | "QRCODE_UPDATED" | "MESSAGES_SET" | "MESSAGES_UPSERT" | "MESSAGES_UPDATE" | "MESSAGES_DELETE" | "SEND_MESSAGE" | "CONTACTS_SET" | "CONTACTS_UPSERT" | "CONTACTS_UPDATE" | "PRESENCE_UPDATE" | "CHATS_SET" | "CHATS_UPSERT" | "CHATS_UPDATE" | "CHATS_DELETE" | "GROUPS_UPSERT" | "GROUP_UPDATE" | "GROUP_PARTICIPANTS_UPDATE" | "CONNECTION_UPDATE" | "LABELS_EDIT" | "LABELS_ASSOCIATION" | "CALL" | "TYPEBOT_START" | "TYPEBOT_CHANGE_STATUS")[];
                    };
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "findSQS-3sr64jukpul": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "setRabbitMQ-rhvdu7u227f": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    rabbitmq: {
                        enabled?: boolean;
                        /** @description Events to be sent to the Webhook */
                        events?: ("APPLICATION_STARTUP" | "QRCODE_UPDATED" | "MESSAGES_SET" | "MESSAGES_UPSERT" | "MESSAGES_UPDATE" | "MESSAGES_DELETE" | "SEND_MESSAGE" | "CONTACTS_SET" | "CONTACTS_UPSERT" | "CONTACTS_UPDATE" | "PRESENCE_UPDATE" | "CHATS_SET" | "CHATS_UPSERT" | "CHATS_UPDATE" | "CHATS_DELETE" | "GROUPS_UPSERT" | "GROUP_UPDATE" | "GROUP_PARTICIPANTS_UPDATE" | "CONNECTION_UPDATE" | "LABELS_EDIT" | "LABELS_ASSOCIATION" | "CALL" | "TYPEBOT_START" | "TYPEBOT_CHANGE_STATUS")[];
                    };
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "findRabbitMQ-o2pqr6zpv1g": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "setWebsocket-stberz06ugn": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    websocket: {
                        enabled?: boolean;
                        /** @description Events to be sent to the websocket */
                        events?: ("APPLICATION_STARTUP" | "QRCODE_UPDATED" | "MESSAGES_SET" | "MESSAGES_UPSERT" | "MESSAGES_UPDATE" | "MESSAGES_DELETE" | "SEND_MESSAGE" | "CONTACTS_SET" | "CONTACTS_UPSERT" | "CONTACTS_UPDATE" | "PRESENCE_UPDATE" | "CHATS_SET" | "CHATS_UPSERT" | "CHATS_UPDATE" | "CHATS_DELETE" | "GROUPS_UPSERT" | "GROUP_UPDATE" | "GROUP_PARTICIPANTS_UPDATE" | "CONNECTION_UPDATE" | "LABELS_EDIT" | "LABELS_ASSOCIATION" | "CALL" | "TYPEBOT_START" | "TYPEBOT_CHANGE_STATUS")[];
                    };
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "findWebsocket-ghox733tm09": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "createBotOpenAI-xgps8oo8jkl": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Indicates whether the bot is enabled */
                    enabled: boolean;
                    /** @description ID of the OpenAI credentials */
                    openaiCredsId: string;
                    /** @description Type of the bot (e.g., 'assistant') */
                    botType: string;
                    /** @description Unique identifier for the assistant */
                    assistantId: string;
                    /** @description URL for additional bot functionality */
                    functionUrl: string;
                    /** @description Model to be used (e.g., 'gpt-4o') */
                    model: string;
                    /** @description Messages to define system behavior */
                    systemMessages: string[];
                    /** @description Predefined assistant messages */
                    assistantMessages: string[];
                    /** @description Predefined user messages */
                    userMessages: string[];
                    /** @description Maximum number of tokens per interaction */
                    maxTokens: number;
                    /** @description Type of trigger for the bot */
                    triggerType: string;
                    /** @description Operator for trigger evaluation */
                    triggerOperator: string;
                    /** @description Value to trigger the bot */
                    triggerValue: string;
                    /** @description Expiration time in seconds */
                    expire: number;
                    /** @description Keyword to terminate the bot interaction */
                    keywordFinish: string;
                    /** @description Delay before the bot responds, in milliseconds */
                    delayMessage: number;
                    /** @description Message to display for unrecognized input */
                    unknownMessage: string;
                    /** @description Indicates if the bot listens to messages from the user */
                    listeningFromMe: boolean;
                    /** @description Indicates if the bot can be stopped by the user */
                    stopBotFromMe: boolean;
                    /** @description Indicates if the bot session remains open */
                    keepOpen: boolean;
                    /** @description Debounce time for message processing */
                    debounceTime: number;
                    /** @description List of JIDs to ignore */
                    ignoreJids: string[];
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "findBotOpenAI-tx8e6tzxel9": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "findBotOpenAI-j7od5amkvg": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
                /** @description ID of the bot */
                openaiBotId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "deleteBotOpenAI-b3q9knck8x9": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
                /** @description ID of the bot */
                openaiBotId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "updateBotOpenAI-oozpsztvk1": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
                /** @description ID of the bot */
                openaiBotId: string;
            };
            cookie?: never;
        };
        /** @description Configuration for the OpenAI bot instance */
        requestBody: {
            content: {
                "application/json": {
                    /** @description Indicates if the bot is enabled */
                    enabled: boolean;
                    /** @description The OpenAI credentials ID */
                    openaiCredsId: string;
                    /**
                     * @description The type of bot (either 'assistant' or 'chatCompletion')
                     * @enum {string}
                     */
                    botType: "assistant" | "chatCompletion";
                    /** @description The ID of the assistant (only if 'botType' is 'assistant') */
                    assistantId?: string;
                    /** @description The function URL that the bot will call */
                    functionUrl?: string;
                    /** @description The OpenAI model to use for chat completion (e.g., 'gpt-4o') */
                    model: string;
                    /** @description The system messages to define the assistant behavior */
                    systemMessages?: string[];
                    /** @description Messages to be sent by the assistant */
                    assistantMessages?: string[];
                    /** @description Messages sent by the user */
                    userMessages?: string[];
                    /** @description Maximum number of tokens for the bot's responses */
                    maxTokens?: number;
                    /**
                     * @description The trigger type for the bot (e.g., 'keyword' or 'all')
                     * @enum {string}
                     */
                    triggerType?: "all" | "keyword";
                    /**
                     * @description The operator to match the trigger type
                     * @enum {string}
                     */
                    triggerOperator?: "equals" | "contains" | "startsWith" | "endsWith" | "regex" | "none";
                    /** @description The value that triggers the bot (e.g., 'teste') */
                    triggerValue?: string;
                    /** @description The expiration time of the bot instance in minutes */
                    expire?: number;
                    /** @description Keyword to end the bot interaction */
                    keywordFinish?: string;
                    /** @description Time in milliseconds to delay the message */
                    delayMessage?: number;
                    /** @description Message to send if the bot doesn't recognize the input */
                    unknownMessage?: string;
                    /** @description Indicates if the bot should listen for messages from the user */
                    listeningFromMe?: boolean;
                    /** @description Indicates if the bot can be stopped by the user */
                    stopBotFromMe?: boolean;
                    /** @description Indicates if the bot session should remain open */
                    keepOpen?: boolean;
                    /** @description Time in milliseconds for the debounce delay */
                    debounceTime?: number;
                    /** @description List of JIDs to ignore */
                    ignoreJids?: string[];
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "getBotOpenAICreds-wd6uzm0lxfi": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "credsBotOpenAI-wxfxg75gl7": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        /** @description Configuration for the OpenAI bot instance */
        requestBody: {
            content: {
                "application/json": {
                    apiKey: string;
                    name: string;
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "deleteCredsOpenAI-9dynk1leuuk": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
                /** @description ID of the creds */
                openaiCredsId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "setOpenAISettings-dnhdw0l2ugb": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        /** @description Configuration for updating the OpenAI bot settings */
        requestBody: {
            content: {
                "application/json": {
                    /** @description The OpenAI credentials ID */
                    openaiCredsId: string;
                    /** @description Expiration time in seconds */
                    expire: number;
                    /** @description Keyword to finish the interaction */
                    keywordFinish: string;
                    /** @description Delay time for the message in milliseconds */
                    delayMessage: number;
                    /** @description Message when the input is not recognized */
                    unknownMessage: string;
                    /** @description Indicates if the bot is listening for commands from the user */
                    listeningFromMe: boolean;
                    /** @description Indicates if the bot should stop upon user command */
                    stopBotFromMe: boolean;
                    /** @description Indicates if the bot session should remain open */
                    keepOpen: boolean;
                    /** @description Time in milliseconds to wait before processing the next input */
                    debounceTime: number;
                    /** @description List of JIDs (Jabber IDs) to ignore */
                    ignoreJids: string[];
                    /** @description Fallback OpenAI credentials ID if the main one fails */
                    openaiIdFallback: string;
                };
            };
        };
        responses: {
            /** @description Successfully updated OpenAI bot settings */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Indicates if the update was successful */
                        success?: boolean;
                        /** @description Details about the operation */
                        message?: string;
                    };
                };
            };
            /** @description Bad Request - Invalid input parameters */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "findSettingsOpenAI-958uiy6a2w": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "changeOpenAIStatus-m9u25hjdk3a": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        /** @description Body for changing the status of the OpenAI bot */
        requestBody: {
            content: {
                "application/json": {
                    /** @description The JID (Jabber ID) of the remote contact */
                    remoteJid: string;
                    /**
                     * @description Status of the bot instance. Possible values: 'opened', 'paused', 'closed'
                     * @enum {string}
                     */
                    status: "opened" | "paused" | "closed";
                };
            };
        };
        responses: {
            /** @description Successfully changed the bot status */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description Indicates if the status change was successful */
                        success?: boolean;
                        /** @description Details about the status change operation */
                        message?: string;
                    };
                };
            };
            /** @description Bad Request - Invalid input parameters */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "fetchSessions-5w3sig8lipa": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the OpenAI bot */
                openaiBotId: string;
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fetched sessions */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example OK */
                        message?: string;
                    };
                };
            };
            /** @description Bad Request - Invalid parameters */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found - No sessions found for the given bot and instance */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "createDifyBot-cxnrvnoby": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        /** @description Configuration for the Dify bot instance */
        requestBody: {
            content: {
                "application/json": {
                    enabled: boolean;
                    /** @enum {string} */
                    botType: "chatBot" | "textGenerator" | "agent" | "workflow";
                    apiUrl: string;
                    apiKey: string;
                    /** @enum {string} */
                    triggerType?: "all" | "keyword";
                    /** @enum {string} */
                    triggerOperator?: "contains" | "equals" | "startsWith" | "endsWith" | "regex" | "none";
                    triggerValue?: string;
                    expire?: number;
                    keywordFinish?: string;
                    delayMessage?: number;
                    unknownMessage?: string;
                    listeningFromMe?: boolean;
                    stopBotFromMe?: boolean;
                    keepOpen?: boolean;
                    debounceTime?: number;
                    ignoreJids?: string[];
                };
            };
        };
        responses: {
            /** @description Bot instance created successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Bot instance created successfully */
                        message?: string;
                    };
                };
            };
            /** @description Bad Request - Invalid or missing parameters */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Not Found - Instance could not be created */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Internal Server Error */
            500: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "fetchDify-mbn12bxfkei": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fetched sessions */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example OK */
                        message?: string;
                    };
                };
            };
        };
    };
    "findDify-gyt8v0dbfi": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
                /** @description ID of the dify bot */
                difyId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fetched sessions */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example OK */
                        message?: string;
                    };
                };
            };
        };
    };
    "updateDifyBot-ntfiyhytib": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
                /** @description Id bot dify */
                difyId: string;
            };
            cookie?: never;
        };
        /** @description Configuration for the Dify bot instance */
        requestBody: {
            content: {
                "application/json": {
                    enabled: boolean;
                    /** @enum {string} */
                    botType: "chatBot" | "textGenerator" | "agent" | "workflow";
                    apiUrl: string;
                    apiKey: string;
                    /** @enum {string} */
                    triggerType?: "all" | "keyword";
                    /** @enum {string} */
                    triggerOperator?: "contains" | "equals" | "startsWith" | "endsWith" | "regex" | "none";
                    triggerValue?: string;
                    expire?: number;
                    keywordFinish?: string;
                    delayMessage?: number;
                    unknownMessage?: string;
                    listeningFromMe?: boolean;
                    stopBotFromMe?: boolean;
                    keepOpen?: boolean;
                    debounceTime?: number;
                    ignoreJids?: string[];
                };
            };
        };
        responses: {
            /** @description Bot instance created successfully */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Bot instance created successfully */
                        message?: string;
                    };
                };
            };
        };
    };
    "updateDifySettings-bsia0lmjol": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Nome da instância */
                instance: string;
            };
            cookie?: never;
        };
        /** @description Configurações do bot Dify */
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Tempo de expiração em minutos.
                     * @example 20
                     */
                    expire: number;
                    /**
                     * @description Palavra-chave que finalizará o bot.
                     * @example #SAIR
                     */
                    keywordFinish: string;
                    /**
                     * @description Tempo de delay antes do envio de uma nova mensagem (em milissegundos).
                     * @example 1000
                     */
                    delayMessage: number;
                    /**
                     * @description Mensagem que será enviada quando o bot não reconhecer o comando.
                     * @example Mensagem não reconhecida
                     */
                    unknownMessage: string;
                    /**
                     * @description Define se o bot deve ouvir mensagens enviadas pelo próprio usuário.
                     * @example false
                     */
                    listeningFromMe: boolean;
                    /**
                     * @description Define se o bot deve parar ao receber mensagens enviadas pelo próprio usuário.
                     * @example false
                     */
                    stopBotFromMe: boolean;
                    /**
                     * @description Define se o bot deve manter a conversa aberta após uma resposta.
                     * @example false
                     */
                    keepOpen: boolean;
                    /**
                     * @description Tempo de debounce (em milissegundos).
                     * @example 0
                     */
                    debounceTime: number;
                    /**
                     * @description Lista de JIDs a serem ignorados.
                     * @example []
                     */
                    ignoreJids: string[];
                    /**
                     * @description ID de fallback do bot Dify.
                     * @example clyja4oys0a3uqpy7k3bd7swe
                     */
                    difyIdFallback: string;
                };
            };
        };
        responses: {
            /** @description Configurações do bot Dify atualizadas com sucesso. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Configurações do bot Dify atualizadas com sucesso */
                        message?: string;
                    };
                };
            };
        };
    };
    "findDifySettings-wy1twr6w9x": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Nome da instância */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Configurações do bot Dify atualizadas com sucesso. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Configurações do bot Dify atualizadas com sucesso */
                        message?: string;
                    };
                };
            };
        };
    };
    "changeDifyBotStatus-2q9b4iz3yw2": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Nome da instância */
                instance: string;
            };
            cookie?: never;
        };
        /** @description Dados para alterar o status do bot Dify */
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Número de telefone remoto no formato E.164 (ex: 5511912345678@s.whatsapp.net)
                     * @example 5511912345678@s.whatsapp.net
                     */
                    remoteJid: string;
                    /**
                     * @description Status a ser atribuído ao bot Dify. Os valores válidos são `opened`, `paused` e `closed`.
                     * @example closed
                     * @enum {string}
                     */
                    status: "opened" | "paused" | "closed";
                };
            };
        };
        responses: {
            /** @description Status do bot Dify alterado com sucesso. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Status do bot Dify alterado para closed com sucesso */
                        message?: string;
                    };
                };
            };
        };
    };
    "fetchDifyBotSessions-y51pnsoogxi": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID único do bot Dify. */
                difyId: string;
                /** @description Nome da instância. */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Sessões recuperadas com sucesso. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        sessions?: string;
                    };
                };
            };
        };
    };
    "createFlowiseInstance-d3g7y9ynrh": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Nome da instância */
                instance: string;
            };
            cookie?: never;
        };
        /** @description Configuração para a instância do Flowise */
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Indica se a instância está habilitada ou não.
                     * @example true
                     */
                    enabled: boolean;
                    /**
                     * @description URL da API do Flowise.
                     * @example http://dify.site.com/v1
                     */
                    apiUrl: string;
                    /**
                     * @description Chave de API (opcional).
                     * @example app-123456
                     */
                    apiKey?: string;
                    /**
                     * @description Tipo de gatilho para o bot.
                     * @example keyword
                     * @enum {string}
                     */
                    triggerType: "all" | "keyword";
                    /**
                     * @description Operador para o gatilho.
                     * @example equals
                     * @enum {string}
                     */
                    triggerOperator: "contains" | "equals" | "startsWith" | "endsWith" | "regex" | "none";
                    /**
                     * @description Valor do gatilho.
                     * @example teste
                     */
                    triggerValue: string;
                    /**
                     * @description Tempo de expiração do bot em minutos.
                     * @example 0
                     */
                    expire?: number;
                    /**
                     * @description Palavra-chave para encerrar a interação.
                     * @example #SAIR
                     */
                    keywordFinish?: string;
                    /**
                     * @description Tempo de atraso para a mensagem, em milissegundos.
                     * @example 1000
                     */
                    delayMessage?: number;
                    /**
                     * @description Mensagem padrão quando a entrada não for reconhecida.
                     * @example Mensagem não reconhecida
                     */
                    unknownMessage?: string;
                    /**
                     * @description Indica se o bot deve ouvir apenas mensagens enviadas por você.
                     * @example false
                     */
                    listeningFromMe?: boolean;
                    /**
                     * @description Indica se o bot deve ser parado quando você enviar uma mensagem.
                     * @example false
                     */
                    stopBotFromMe?: boolean;
                    /**
                     * @description Indica se a instância do bot deve permanecer aberta.
                     * @example false
                     */
                    keepOpen?: boolean;
                    /**
                     * @description Tempo de debounce para a entrada, em milissegundos.
                     * @example 0
                     */
                    debounceTime?: number;
                    /**
                     * @description Lista de JIDs (identificadores de usuário) que o bot deve ignorar.
                     * @example [
                     *       "1234567890@s.whatsapp.net"
                     *     ]
                     */
                    ignoreJids?: string[];
                };
            };
        };
        responses: {
            /** @description Instância do Flowise criada com sucesso */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Instância do Flowise criada com sucesso */
                        message?: string;
                    };
                };
            };
            /** @description Erro na requisição, parâmetros inválidos */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Parâmetros inválidos fornecidos */
                        error?: string;
                    };
                };
            };
            /** @description Instância não encontrada */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Instância não encontrada */
                        error?: string;
                    };
                };
            };
        };
    };
    "fetchFlowiseBotSessions-t85527pcwtc": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Nome da instância. */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Sessões recuperadas com sucesso. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        sessions?: string;
                    };
                };
            };
        };
    };
    "fetchFlowiseBotSessions-52zuzta5ml6": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Nome da instância. */
                instance: string;
                /** @description Id Bot Flowise */
                flowiseId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Sessões recuperadas com sucesso. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        sessions?: string;
                    };
                };
            };
        };
    };
    "updateFlowiseInstance-ledw5flul0i": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID da instância do Flowise */
                flowiseId: string;
                /** @description Nome da instância */
                instance: string;
            };
            cookie?: never;
        };
        /** @description Configuração para atualizar a instância do Flowise */
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Indica se a instância está habilitada ou não.
                     * @example true
                     */
                    enabled: boolean;
                    /**
                     * @description URL da API do Flowise.
                     * @example http://dify.site.com/v1
                     */
                    apiUrl: string;
                    /**
                     * @description Chave de API (opcional).
                     * @example app-123456
                     */
                    apiKey?: string;
                    /**
                     * @description Tipo de gatilho para o bot.
                     * @example keyword
                     * @enum {string}
                     */
                    triggerType: "all" | "keyword";
                    /**
                     * @description Operador para o gatilho.
                     * @example equals
                     * @enum {string}
                     */
                    triggerOperator: "contains" | "equals" | "startsWith" | "endsWith" | "regex" | "none";
                    /**
                     * @description Valor do gatilho.
                     * @example teste
                     */
                    triggerValue: string;
                    /**
                     * @description Tempo de expiração do bot em minutos.
                     * @example 0
                     */
                    expire?: number;
                    /**
                     * @description Palavra-chave para encerrar a interação.
                     * @example #SAIR
                     */
                    keywordFinish?: string;
                    /**
                     * @description Tempo de atraso para a mensagem, em milissegundos.
                     * @example 1000
                     */
                    delayMessage?: number;
                    /**
                     * @description Mensagem padrão quando a entrada não for reconhecida.
                     * @example Mensagem não reconhecida
                     */
                    unknownMessage?: string;
                    /**
                     * @description Indica se o bot deve ouvir apenas mensagens enviadas por você.
                     * @example false
                     */
                    listeningFromMe?: boolean;
                    /**
                     * @description Indica se o bot deve ser parado quando você enviar uma mensagem.
                     * @example false
                     */
                    stopBotFromMe?: boolean;
                    /**
                     * @description Indica se a instância do bot deve permanecer aberta.
                     * @example false
                     */
                    keepOpen?: boolean;
                    /**
                     * @description Tempo de debounce para a entrada, em milissegundos.
                     * @example 0
                     */
                    debounceTime?: number;
                    /**
                     * @description Lista de JIDs (identificadores de usuário) que o bot deve ignorar.
                     * @example [
                     *       "1234567890@s.whatsapp.net"
                     *     ]
                     */
                    ignoreJids?: string[];
                };
            };
        };
        responses: {
            /** @description Instância do Flowise atualizada com sucesso */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Instância do Flowise atualizada com sucesso */
                        message?: string;
                    };
                };
            };
            /** @description Erro na requisição, parâmetros inválidos */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Parâmetros inválidos fornecidos */
                        error?: string;
                    };
                };
            };
            /** @description Instância não encontrada */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Instância não encontrada */
                        error?: string;
                    };
                };
            };
        };
    };
    "deleteBot-z3yb6ejx2g": {
        parameters: {
            query: {
                /** @description Id Bot Flowise */
                flowiseId: string;
            };
            header?: never;
            path: {
                /** @description Name of the instance  */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "setlowiseSettings-rg6pn09neyd": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Nome da instância */
                instance: string;
            };
            cookie?: never;
        };
        /** @description Configuração para atualizar as preferências da instância do Flowise */
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Tempo de expiração do bot, em minutos.
                     * @example 20
                     */
                    expire: number;
                    /**
                     * @description Palavra-chave que encerra a interação com o bot.
                     * @example #SAIR
                     */
                    keywordFinish: string;
                    /**
                     * @description Tempo de atraso para a mensagem, em milissegundos.
                     * @example 1000
                     */
                    delayMessage: number;
                    /**
                     * @description Mensagem enviada quando o bot não reconhece a entrada.
                     * @example Mensagem não reconhecida
                     */
                    unknownMessage: string;
                    /**
                     * @description Indica se o bot deve ouvir apenas as mensagens enviadas pelo usuário.
                     * @example false
                     */
                    listeningFromMe: boolean;
                    /**
                     * @description Indica se o bot deve ser interrompido quando o usuário envia uma mensagem.
                     * @example false
                     */
                    stopBotFromMe: boolean;
                    /**
                     * @description Indica se o bot deve permanecer aberto após a interação.
                     * @example false
                     */
                    keepOpen: boolean;
                    /**
                     * @description Tempo de debounce em milissegundos para a entrada do usuário.
                     * @example 0
                     */
                    debounceTime: number;
                    /**
                     * @description Lista de JIDs que devem ser ignorados pelo bot.
                     * @example []
                     */
                    ignoreJids: string[];
                    /**
                     * @description ID do Flowise a ser utilizado como fallback caso a instância atual não esteja disponível.
                     * @example clyja4oys0a3uqpy7k3bd7swe
                     */
                    flowiseIdFallback: string;
                };
            };
        };
        responses: {
            /** @description Configurações da instância do Flowise atualizadas com sucesso */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Configurações da instância do Flowise atualizadas com sucesso */
                        message?: string;
                    };
                };
            };
        };
    };
    "fetchFlowiseSessions-nbyj9w5x8ik": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Nome da instância. */
                instance: string;
                /** @description Id Bot Flowise */
                flowiseId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Sessões recuperadas com sucesso. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        sessions?: string;
                    };
                };
            };
        };
    };
    "fetchFlowiseSettings-blw584v8or": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Nome da instância. */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Sessões recuperadas com sucesso. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        sessions?: string;
                    };
                };
            };
        };
    };
    "changeFlowiseStatus-rdyt8jbp3n": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Nome da instância */
                instance: string;
            };
            cookie?: never;
        };
        /** @description Corpo da requisição contendo o identificador remoto e o status a ser atualizado */
        requestBody: {
            content: {
                "application/json": {
                    /**
                     * @description Identificador remoto do WhatsApp no formato JID
                     * @example 5511912345678@s.whatsapp.net
                     */
                    remoteJid: string;
                    /**
                     * @description Novo status para a instância
                     * @example closed
                     * @enum {string}
                     */
                    status: "opened" | "paused" | "closed";
                };
            };
        };
        responses: {
            /** @description Status da instância Flowise atualizado com sucesso */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Status alterado com sucesso */
                        message?: string;
                    };
                };
            };
            /** @description Erro na requisição, parâmetros inválidos ou ausentes */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Parâmetros inválidos fornecidos */
                        error?: string;
                    };
                };
            };
            /** @description Instância do Flowise não encontrada */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Instância não encontrada */
                        error?: string;
                    };
                };
            };
        };
    };
    "createEvolutionBot-1go18jaex06": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Enable Evolution Bot */
                    enabled: boolean;
                    /** @description API URL for the bot */
                    apiUrl: string;
                    /** @description API Key for authentication (optional) */
                    apiKey?: string;
                    /** @description Trigger type, e.g., 'all' or 'keyword' */
                    triggerType: string;
                    /** @description Operator logic, e.g., 'contains', 'equals', 'startsWith', 'endsWith', 'regex' */
                    triggerOperator: string;
                    /** @description Trigger value, e.g., 'test' */
                    triggerValue: string;
                    /** @description Expiration time for the session (in seconds) */
                    expire: number;
                    /** @description Keyword to terminate the session */
                    keywordFinish: string;
                    /** @description Delay time (in ms) for sending messages */
                    delayMessage: number;
                    /** @description Message displayed when an unknown input is received */
                    unknownMessage: string;
                    /** @description Listen to messages sent by the bot owner */
                    listeningFromMe: boolean;
                    /** @description Stop bot when the owner sends a message */
                    stopBotFromMe: boolean;
                    /** @description Keep the session open after processing messages */
                    keepOpen: boolean;
                    /** @description Time delay to debounce messages */
                    debounceTime: number;
                    /** @description List of JIDs to ignore */
                    ignoreJids?: string[];
                };
            };
        };
        responses: {
            /** @description Evo bot criado com sucesso */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example Sucess */
                        message?: string;
                    };
                };
            };
        };
    };
    "findEvo-y6rpdp3pfop": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
                /** @description ID of the evo bot */
                evolutionBotId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fetched sessions */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example OK */
                        message?: string;
                    };
                };
            };
        };
    };
    "updateEvolutionBot-nlen3kh2md": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the Evolution Bot to update */
                evolutionBotId: string;
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Enable or disable the Evolution Bot */
                    enabled: boolean;
                    /** @description API URL for the bot */
                    apiUrl: string;
                    /** @description API Key for authentication (optional) */
                    apiKey?: string;
                    /** @description Trigger type, e.g., 'all' or 'keyword' */
                    triggerType: string;
                    /** @description Operator logic, e.g., 'contains', 'equals', 'startsWith', 'endsWith', 'regex' */
                    triggerOperator: string;
                    /** @description Trigger value, e.g., 'test' */
                    triggerValue: string;
                    /** @description Expiration time for the session (in seconds) */
                    expire: number;
                    /** @description Keyword to terminate the session */
                    keywordFinish: string;
                    /** @description Delay time (in ms) for sending messages */
                    delayMessage: number;
                    /** @description Message displayed when an unknown input is received */
                    unknownMessage: string;
                    /** @description Listen to messages sent by the bot owner */
                    listeningFromMe: boolean;
                    /** @description Stop bot when the owner sends a message */
                    stopBotFromMe: boolean;
                    /** @description Keep the session open after processing messages */
                    keepOpen: boolean;
                    /** @description Time delay to debounce messages */
                    debounceTime: number;
                    /** @description List of JIDs to ignore */
                    ignoreJids?: string[];
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "findEvo-ocvm51qtoif": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Successfully fetched sessions */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @example OK */
                        message?: string;
                    };
                };
            };
        };
    };
    "deleteBot-jbfdw2wwsbq": {
        parameters: {
            query: {
                /** @description Id Bot Evolution */
                evolutionBotId: string;
            };
            header?: never;
            path: {
                /** @description Name of the instance  */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "createEvolutionBotSettings-u7zvrbqpw6": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Expiration time for the session (in seconds) */
                    expire: number;
                    /** @description Keyword to terminate the session */
                    keywordFinish: string;
                    /** @description Delay time (in ms) for sending messages */
                    delayMessage: number;
                    /** @description Message displayed when an unknown input is received */
                    unknownMessage: string;
                    /** @description Listen to messages sent by the bot owner */
                    listeningFromMe: boolean;
                    /** @description Stop bot when the owner sends a message */
                    stopBotFromMe: boolean;
                    /** @description Keep the session open after processing messages */
                    keepOpen: boolean;
                    /** @description Time delay to debounce messages */
                    debounceTime: number;
                    /** @description List of JIDs to ignore */
                    ignoreJids?: string[];
                    /** @description Fallback bot ID to use */
                    botIdFallback: string;
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "findEvolutionBot-yx3tfcxy7a": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "findEvolutionBot-4bkjvx37m5e": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
                /** @description ID of the evo bot */
                evolutionBotId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "changeEvobotStatus-qdvqi3mkhhn": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Name of the instance */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description {{remoteJid}} */
                    remoteJid?: string;
                    /** @description Typebot status, types: opened, paused, closed */
                    status?: string;
                };
            };
        };
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    "getEvoInfo-i1an7x4thus": {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description ID of the instance to connect */
                instance: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ok */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        /** @description The HTTP status of the response */
                        status?: number;
                        /** @description Descriptive message about the current state of the API */
                        message?: string;
                        /** @description The current version of the API */
                        version?: string;
                        /** @description URL to the API's Swagger documentation */
                        swagger?: string;
                        /** @description URL to the API manager */
                        manager?: string;
                        /** @description URL to the detailed API documentation */
                        documentation?: string;
                    };
                };
            };
        };
    };
}
