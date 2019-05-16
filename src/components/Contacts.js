import React from 'react'
  function Contacts(){
      return (
      <>
      <div className="contact container">
        <div className="row">
          <div className="framework col-sm-12">
        <form>
          <fieldset>
            <div className="name col-sm-12">
              <legend>
                <h3>Your Details:</h3>
              </legend>
            </div>
            <div className="name col-sm-12">
              <label>
                <h4>Name:</h4>
                <input type="name" name="name" size="{30}" maxlenghth="{100}" />
              </label>
            </div>
            <div className=" col-sm-12">
              <h4>Email:</h4>
              <input type="email" name="email" size="{30}" maxlenghth="{100}" />
            </div>
            <div className="Phone col-sm-12">
              <label>
                <h4>Telephone:</h4>
                <input type="number" name="number" size="{30}" maxlenghth="{100}" />
              </label>
            </div>
            <div className=" col-sm-12">
              <legend>
                <h3>Your Review:</h3>
              </legend>
            </div>
            <div className="col-sm-12">
              <label htmlfor="hear-about">
                <p>How did you hear about us?</p>
              </label>
            </div>
            <div className="col-sm-12">
              <select name="referrer" id="hear-about">
                <option value="google">Google</option>
                <option value="friend">Friend</option>
                <option value="advert">Advert</option>
                <option value="other">Other</option>
              </select>
            </div>
          </fieldset> 
          <div className="col-sm-12">
            <label htmlfor="comments">
              <h4>Comments:</h4>
            </label>
          </div>
          <div className="col-sm-12">
            <textarea rows="{4}" cols="{40}" id="comments" defaultValue={""} />
          </div>
          <div className="submit col-sm-12">
            <input type="submit" defaultvalue="Submit review" />
          </div>
        </form>
        </div>
      </div>
    </div>
    </>
    )
  }
export default Contacts;
