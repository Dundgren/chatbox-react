import { useEffect, useState } from "react";
import { apiGetMessages } from "../helpers/message";

export default function ChatBox({username}) {
    // State
    const [messages, setMessages] = useState(["lol"]);
    // Functions
    async function getMessages() {
        let newMessages = await apiGetMessages();

        newMessages.data.forEach(m => {
            const d = new Date(m.timestamp);

            m.timestamp = d.toLocaleString("sv-SE");
        });

        setMessages(newMessages.data);
    }

    // Effects
    useEffect(() => {setInterval(getMessages, 1000)}, [getMessages]);

    // Elements
    const messageElements = messages.map(m => {
        <h2>{m.username}</h2>
    })

    return (
        <div>{messageElements}</div>
    )
}

/* <template>
    <div id="chat-box" ref="chatBoxDiv" @scroll="this.shouldScrollToBottom = false">
            <div v-for="m in messages" :key="m.id_" :class="this.$store.state.username == m.username ? 'message-box message-right' : 'message-box'">
                <h2>{{ m.username }} <span class="date-string">{{ m.timestamp }}</span> </h2>
                <p>{{ m.message }}</p>
            </div>
    </div>
    <!-- <p v-if="!this.shouldScrollToBottom" id="jump-button"><span>You're viewing old messages. Click here to jump to bottom.</span></p> -->
</template>

<script>
import { apiGetMessages } from "../helpers/message";

export default {
    data() {
        return {
            shouldScrollToBottom: true,
        }
    },
    computed: {
        messages: {
            get() {
                return this.$store.state.messages;
            },
            set(data) {
                this.$store.commit("setMessages", data);
            }
        }
    },
    methods: {
,
        scrollToBottom() {
            if (this.$refs.chatBoxDiv.scrollHeight - this.$refs.chatBoxDiv.scrollTop == this.$refs.chatBoxDiv.clientHeight) {
                this.shouldScrollToBottom = true;
            }
            if (this.shouldScrollToBottom) {
                this.$refs.chatBoxDiv.scrollTop = this.$refs.chatBoxDiv.scrollHeight;
            }
        },

    },
    created() {
        
    },
    mounted() {
        setInterval(this.scrollToBottom, 200);
    }
}
</script>

<style lang="scss" scoped>

</style> */